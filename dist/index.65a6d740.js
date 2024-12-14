(()=>{let e=window.API_URL;async function t(){try{let t=await fetch(e);return await t.json()}catch(e){console.error("Erro ao buscar dados:",e)}}let n=document.getElementById("modal"),o=document.getElementById("modal-img"),c=document.getElementById("caption"),i=document.querySelector(".close");n.style.display="none";let a=document.querySelector(".image-grid");async function r(){let e=await t();try{let t=e.map(e=>`
            <article data-description="${e.descricao}">
              <figure>
                <img src="${e.imgUrl}" alt="${e.alt}" />
              </figure>
            </article>
          `).join("");a.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".image-grid img").forEach(e=>{e.addEventListener("click",function(){c.textContent="",n.style.display="block",o.src=this.src;let e=this.closest("article"),t=(e?e.dataset.description:"")||this.alt;c.innerHTML=`<p>${t}</p>`})})}catch(e){console.error("Erro ao popular página",e)}}i.addEventListener("click",function(){n.style.display="none"}),window.addEventListener("click",function(e){e.target===n&&(n.style.display="none")}),document.addEventListener("DOMContentLoaded",r)})();
//# sourceMappingURL=index.65a6d740.js.map
