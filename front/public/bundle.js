(()=>{var n={989:n=>{const e=document.getElementById("contenedorPadre");n.exports=function(n){const t=document.createElement("div");t.classList.add("contenedorPrincipal"),t.innerHTML=`\n<div>\n<img class="imagenes" src="${n.poster}" alt="${n.title}"/>\n</div>\n<div>\n<h4 class="h_4">${n.title}</h4>\n<h5 class="h_5">${n.director}</h5>\n<h5 class="h_5">${n.duration}</h5>\n<h5 class="h_5">${n.year}</h5>\n<h5 class="h_5">${n.rate}</h5>\n<h5 class="h_5">${n.genre}</h5>\n</div>\n`,e.appendChild(t)}}},e={};function t(s){var r=e[s];if(void 0!==r)return r.exports;var a=e[s]={exports:{}};return n[s](a,a.exports,t),a.exports}(()=>{const n=t(989);$.get("https://students-api.2.us-1.fl0.io/movies",(e=>{e.forEach(n)}))})()})();