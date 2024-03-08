// const Peliculas = require("../models/Peliculas");   
// const RepositorioPelicula = require("../models/RepositorioPelicula");

const mapeoPeliculas = (p) => {
    const tarjeta = document.createElement('div');

    tarjeta.innerHTML = `
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
    tarjeta.classList.add("contenedorPrincipal");
    return tarjeta;
};

const renderizarPelicula = (lista) => {
    const contenedor = document.getElementById('contenedorPadre');
    contenedor.innerHTML = '';
    const mostrarPeliculas = lista.map(mapeoPeliculas);
    mostrarPeliculas.forEach(tarjetElement => contenedor.appendChild(tarjetElement));
};

const listaPeliculas = () => {
    $.get(`https://students-api.2.us-1.fl0.io/movies`, (arrayPeliculas) => {
        const listPelicula = arrayPeliculas.map((peli) => new Peliculas(peli.title, peli.year, peli.director, peli.duration, peli.rate, peli.genre, peli.poster));
        console.log(listPelicula);
        RepositorioPelicula.peliculas = listPelicula;
        renderizarPelicula(listPelicula);
    }); 
}; 

// const repository = new RepositorioPelicula();
listaPeliculas();    

/*
const contenedorPadre = document.getElementById('contenedorPadre');

function renderizarPelicula(pelicula) {
    const titulo = document.createElement('h4');
    titulo.textContent = pelicula.title;
    titulo.classList.add('h_4');

    const año = document.createElement('h5');
    año.textContent = pelicula.year;
    año.classList.add('h_5');

    const _director = document.createElement('h5');
    _director.textContent = pelicula.director;
    _director.classList.add('h_5');

    const duracion = document.createElement('h5');
    duracion.textContent = pelicula.duration;
    duracion.classList.add('h_5');

    const imagen = document.createElement('img');
    imagen.src = pelicula.poster;
    imagen.classList.add('imagenes');

    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.appendChild(titulo);
    cuerpoTarjeta.appendChild(_director);
    cuerpoTarjeta.appendChild(duracion);
    cuerpoTarjeta.appendChild(año);
    //cuerpoTarjeta.classList.add('div1');

    const tituloTarjeta = document.createElement('div');
    tituloTarjeta.appendChild(imagen);
    //cuerpoTarjeta.classList.add('div2');

    const tarjeta = document.createElement('div');
    tarjeta.appendChild(tituloTarjeta);
    tarjeta.appendChild(cuerpoTarjeta);
    tarjeta.classList.add('contenedorPrincipal');
    
    contenedorPadre.appendChild(tarjeta);
}

$.get(`https://students-api.2.us-1.fl0.io/movies`, (peliculas) => {
    peliculas.forEach(renderizarPelicula);
});

// tempData.forEach(renderizarPelicula);
 */
 