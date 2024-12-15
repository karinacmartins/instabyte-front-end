let e;var t=Object.assign(Object.create(null),{url:"file:///assets/js/fetchApis.js"});async function n(){try{let t=await fetch(e);return await t.json()}catch(e){console.error("Erro ao buscar dados:",e)}}"undefined"!=typeof process&&process.env?e=process.env.API_URL||"https://instabyte-back-end-262694944609.southamerica-east1.run.app/posts":e=t.env&&t.env.API_URL||"https://instabyte-back-end-262694944609.southamerica-east1.run.app/posts";const a=document.getElementById("modal"),s=document.getElementById("modal-img"),c=document.getElementById("caption"),o=document.querySelector(".close");a.style.display="none";const r=document.querySelector(".image-grid");async function i(){let e=await n();try{let t=e.map(e=>`
            <article data-description="${e.descricao}">
              <figure>
                <img src="${e.imgUrl}" alt="${e.alt}" />
              </figure>
            </article>
          `).join("");r.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".image-grid img").forEach(e=>{e.addEventListener("click",function(){c.textContent="",a.style.display="block",s.src=this.src;let e=this.closest("article"),t=(e?e.dataset.description:"")||this.alt;c.innerHTML=`<p>${t}</p>`})})}catch(e){console.error("Erro ao popular página",e)}}o.addEventListener("click",function(){a.style.display="none"}),window.addEventListener("click",function(e){e.target===a&&(a.style.display="none")}),document.addEventListener("DOMContentLoaded",i);
//# sourceMappingURL=index.9695614d.js.map
