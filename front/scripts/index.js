const contenedorPadre = document.getElementById('contenedorPadre');

function renderizarPelicula(pelicula) {
    
    const titulo = document.createElement('h4');
    titulo.textContent = pelicula.title;

    const año = document.createElement('h5');
    año.textContent = pelicula.year;

    const _director = document.createElement('h5');
    _director.textContent = pelicula.director;

    const duracion = document.createElement('h5');
    duracion.textContent = pelicula.duration;

    const imagen = document.createElement('img');
    imagen.src = pelicula.poster;
    imagen.classList.add('imagenes');

    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.appendChild(imagen);
    cuerpoTarjeta.appendChild(_director);
    cuerpoTarjeta.appendChild(duracion);
    cuerpoTarjeta.appendChild(año);

    const tituloTarjeta = document.createElement('div');
    tituloTarjeta.appendChild(titulo);

    const tarjeta = document.createElement('div');
    tarjeta.appendChild(tituloTarjeta);
    tarjeta.appendChild(cuerpoTarjeta);
    tarjeta.classList.add('contenedorPrincipal');
    
    contenedorPadre.appendChild(tarjeta);
}

tempData.forEach(renderizarPelicula);


