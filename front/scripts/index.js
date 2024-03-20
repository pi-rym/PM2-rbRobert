const renderCards = require('./renderCards');
const axios = require("axios");

console.log(axios.get('http://localhost:3000/movies'));  // http://localhost:3000/movies
axios.get('http://localhost:3000/movies')   
     .then((response) => {
       console.log("Respuesta exitosa.", response);

       response.data.forEach( pelicula => {
         renderCards(pelicula);
       })
     })
     .catch((error) => {
       console.error("Error al realizar la peticion.", error.message);
     });

