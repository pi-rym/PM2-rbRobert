const {Router} = require('express');
const { movieController, createMovieController} = require('../controllers/movieController'); 
const validaMovie = require('../middlewares/validaMovie');

const movieRouter = Router();
movieRouter.get('/', movieController);
movieRouter.post('/', validaMovie, createMovieController);

module.exports = movieRouter;