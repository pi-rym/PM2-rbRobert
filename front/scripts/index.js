const renderCards = require('./renderCards');
const axios = require("axios");

// const fetchData = async() => {
//   try {
//     const data = await axios.get('https://students-api.up.railway.app/movies');
//     console.log(data.data); 
//   } catch (error) {
//     throw new error("No se encontro la API get", error.message);  
//     console.log(error);  
//   }
// }
// fetchData()

console.log(axios.get('https://students-api.up.railway.app/movies'));
axios.get('https://students-api.up.railway.app/movies')
     .then((response) => {
       console.log("Respuesta exitosa.", response);

       response.data.forEach( pelicula => {
         renderCards(pelicula);
       })
     })
     .catch((error) => {
       console.error("Error al realizar la peticion.", error.message);
     });


// * anterior
// $.get('https://students-api.up.railway.app/movies',(data, status) => {
//   data.forEach(renderCards)
// })

// ! final 
// ?
