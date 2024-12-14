let API_URL = import.meta.env.VITE_API_URL; // Acessando a variável de ambiente configurada

async function t() {
  try {
    let response = await fetch(API_URL);  // Usando a URL correta para fazer a requisição
    return await response.json();
  } catch (e) {
    console.error("Erro ao buscar dados:", e);
  }
}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const close = document.querySelector(".close");

modal.style.display = "none";
const imageGrid = document.querySelector(".image-grid");

async function a() {
  let data = await t();
  try {
    let images = data.map(item => `
      <article data-description="${item.descricao}">
        <figure>
          <img src="${item.imgUrl}" alt="${item.alt}" />
        </figure>
      </article>
    `).join("");

    imageGrid.insertAdjacentHTML("beforeend", images);

    document.querySelectorAll(".image-grid img").forEach(img => {
      img.addEventListener("click", function () {
        caption.textContent = "";
        modal.style.display = "block";
        modalImg.src = this.src;
        let article = this.closest("article");
        let description = article ? article.dataset.description : this.alt;
        caption.innerHTML = `<p>${description}</p>`;
      });
    });
  } catch (e) {
    console.error("Erro ao popular página", e);
  }
}

close.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", a);
