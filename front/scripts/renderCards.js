
const SeccionPelicula = document.getElementById('contenedorPadre')

function renderCards(p){
//const pelicula = document.createElement("article")
const containerPeliculas= document.createElement("div")

//pelicula.classList.add('contenedorTarjeta');
containerPeliculas.classList.add('contenedorPrincipal');

containerPeliculas.innerHTML=`
<div>
<img class="imagenes" src="${p.poster}" alt="${p.title}"/>
</div>
<div>
<h4 class="h_4">${p.title}</h4>
<h5 class="h_5">${p.director}</h5>
<h5 class="h_5">${p.duration}</h5>
<h5 class="h_5">${p.year}</h5>
<h5 class="h_5">${p.rate}</h5>
<h5 class="h_5">${p.genre}</h5>
</div>
`
SeccionPelicula.appendChild(containerPeliculas);
//SeccionPelicula.appendChild(pelicula);
//pelicula.appendChild(containerPeliculas);

}
module.exports = renderCards;