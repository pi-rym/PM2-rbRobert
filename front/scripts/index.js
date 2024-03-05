class PeliculasRepositorio {
    constructor(tempData){
        this.tempData = tempData;
    }
    listarPeliculas(){
        return this.tempData;
    }
}

const peliculasRepositorio = new PeliculasRepositorio(tempData);

function CrearHtml(tempData) {
    const {title, year, director, duration, poster} = tempData;

    const titulo = document.createElement('h4');
    titulo.textContent = title;

    const año = document.createElement('h5');
    año.textContent = year;
    //año.classList.add('contenido');

    const _director = document.createElement('h5');
    _director.textContent = director;
    //_director.classList.add('contenido');

    const duracion = document.createElement('h5');
    duracion.textContent = duration;
    //duracion.classList.add('contenido');

    const imagen = document.createElement('img');
    imagen.src = poster;
    imagen.classList.add('imagenes');

    const cuerpoTarjeta = document.createElement('div');
    //cuerpoTarjeta.classList.add('cuerpo');
    cuerpoTarjeta.appendChild(imagen);
    cuerpoTarjeta.appendChild(_director);
    cuerpoTarjeta.appendChild(duracion);
    cuerpoTarjeta.appendChild(año);

    const tituloTarjeta = document.createElement('div');
    tituloTarjeta.appendChild(titulo);
    //tituloTarjeta.classList.add('titulo');

    const tarjeta = document.createElement('div');
    tarjeta.appendChild(tituloTarjeta);
    tarjeta.appendChild(cuerpoTarjeta);
    tarjeta.classList.add('contenedorPrincipal');
    
    return tarjeta;
}

function renderizarListaPeliculas() {
    const contenedor = document.getElementById('contenedorPadre');
    
    contenedor.innerHTML = "";
    
    const peliculas = peliculasRepositorio.listarPeliculas();
    const elementosPeliculas = peliculas.map(CrearHtml);

    elementosPeliculas.forEach((peliculas) => {
        contenedor.appendChild(peliculas);
    });

}

window.onload = renderizarListaPeliculas;

