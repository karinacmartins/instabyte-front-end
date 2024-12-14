(()=>{let e=process.env.API_URL;async function t(){try{let t=await fetch(e);return await t.json()}catch(e){console.error("Erro ao buscar dados:",e)}}let n=document.getElementById("modal"),c=document.getElementById("modal-img"),o=document.getElementById("caption"),i=document.querySelector(".close");n.style.display="none";let r=document.querySelector(".image-grid");async function a(){let e=await t();try{let t=e.map(e=>`
            <article data-description="${e.descricao}">
              <figure>
                <img src="${e.imgUrl}" alt="${e.alt}" />
              </figure>
            </article>
          `).join("");r.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".image-grid img").forEach(e=>{e.addEventListener("click",function(){o.textContent="",n.style.display="block",c.src=this.src;let e=this.closest("article"),t=(e?e.dataset.description:"")||this.alt;o.innerHTML=`<p>${t}</p>`})})}catch(e){console.error("Erro ao popular página",e)}}i.addEventListener("click",function(){n.style.display="none"}),window.addEventListener("click",function(e){e.target===n&&(n.style.display="none")}),document.addEventListener("DOMContentLoaded",a)})();
//# sourceMappingURL=index.c5bc8c06.js.map
