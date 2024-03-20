const Movies = require('../typesClass/classMovie')
const moviesValidation = require('../utils/moviesValidations')
const Movie = require('../models/Movie')

const getMoviesService = async ()=> {
    try {
        const movies = await Movie.find();
        const peliculas = movies.map( (movie) => {
            if(moviesValidation(movie)){ 
                return new Movies(movie);
            }
        }); 
    return peliculas;
    } catch (error) {
        console.log(error.message);
        throw new Error(error);
	}
}

const postMoviesService = async (movie) => {
    console.log('ingresando al metodo postMovieService!.');
    try {
      const newMovie = await Movie.create(movie)
      return newMovie
    } catch (error) {
        console.log(error.message);
        throw Error('Error en el proceso de crear pelicula')
    }
}

module.exports = {
    getMoviesService, 
    postMoviesService
}
