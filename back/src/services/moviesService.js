const axios = require('axios')
const Movies = require('../typesClass/classMovie')
const moviesValidation = require('../utils/moviesValidations')

const getMoviesService = async ()=> {
    try {
        const users = await axios('https://students-api.up.railway.app/movies')
        // return users.data
        const movies = users.data.map( (movie) => {
            if(moviesValidation(movie)){ 
                return new Movies(movie);
            }
        }); 
    return movies;
    } catch (error) {
        console.log(error.message);
        throw new Error(error);
	}
}

module.exports = getMoviesService