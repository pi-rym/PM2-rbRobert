const { getMoviesService, postMoviesService } = require('../services/moviesService')

const movieController = async (req, res) => {
    // res.send('próximamente estarán disponibles los datos de películas');
    try {
        const movies = await getMoviesService()
        // throw Error('soy el error')
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({error:error.message}) 
    }
}

const createMovieController = async (req, res) => {
    try {
      console.log('data cuerpo controller: ' + req.body);
      await postMoviesService(req.body)
      res.status(201).json({message: "Pelicula se ha creado exitosamente"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    movieController,
    createMovieController
}