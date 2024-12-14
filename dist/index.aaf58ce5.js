// Definindo a URL diretamente para evitar erros
const API_URL = process.env.API_URL;  // A variável será injetada pelo Parcel no processo de build.

async function fetchImages() {
  try {
    const response = await fetch(API_URL); // Usando a URL da API definida
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
modal.style.display = "none";

const imageGrid = document.querySelector(".image-grid");

async function loadImages() {
  const images = await fetchImages();
  try {
    const imageHtml = images.map(image => `
      <article data-description="${image.descricao}">
        <figure>
          <img src="${image.imgUrl}" alt="${image.alt}" />
        </figure>
      </article>
    `).join("");
    
    imageGrid.insertAdjacentHTML("beforeend", imageHtml);
    
    // Adicionando eventos de clique para as imagens
    document.querySelectorAll(".image-grid img").forEach(img => {
      img.addEventListener("click", function() {
        caption.textContent = "";
        modal.style.display = "block";
        modalImg.src = this.src;
        const article = this.closest("article");
        const description = article ? article.dataset.description : this.alt;
        caption.innerHTML = `<p>${description}</p>`;
      });
    });
  } catch (error) {
    console.error("Erro ao popular página", error);
  }
}

// Fechar modal ao clicar no 'x' ou fora do modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Carregar as imagens quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", loadImages);
