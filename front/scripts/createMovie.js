const axios = require("axios");
//validacion
(function () {
    "use strict";
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
        );
    });

})();

//Limpiar formulario
document.querySelector("#limpiar").addEventListener("click", function (event) {
    event.preventDefault(); 
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = "";
    });
});

//Agregar Pelicula
function AgregarPelicula() {
    const poster = document.getElementById('poster').value;
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duration').value;
    const year = parseInt(document.getElementById('year').value);
    const rate = document.getElementById('rate').value;
    const genre = document.getElementById('genre').value.split(",");

    const pelicula = {
        poster: poster,
        title: title,
        director: director,
        duration: duration,
        year: year,
        rate: rate,
        genre: genre
    };

    console.log(pelicula);
    return pelicula;
}

const formPelicula = document.getElementById("formPelicula");

if (formPelicula) {
    const enviarPelicula = async (event) => {
        event.preventDefault();
        try {
            const pelicula = AgregarPelicula(); 
            const response = await axios.post('http://localhost:3000/movies', pelicula);
            console.log(response);
            alert("¡Película registrada exitosamente!");
            limpiarPelicula();
        } catch (error) {
            console.error("Error al realizar la petición.", error.message);
        }
    };
    formPelicula.addEventListener("submit", enviarPelicula);
}

const limpiarPelicula = () => {
    document.getElementById('poster').value = '';
    document.getElementById('title').value = '';
    document.getElementById('director').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('year').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('genre').value = '';
};