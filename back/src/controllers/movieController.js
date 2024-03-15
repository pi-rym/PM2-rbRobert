const getMoviesService = require('../services/moviesService')

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

module.exports = movieController;