const  {Router} = require('express');
const movieRouter = require('./moviesRouter');

const indexRouter = Router();
indexRouter.use('/movies', movieRouter);

module.exports = indexRouter;