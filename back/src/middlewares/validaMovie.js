const validaMovie = (req, res, next) => {

    const {_id,title, year, director, duration, genre, rate, poster} = req.body
    if(![title, year, director, duration, genre, rate, poster].every(Boolean)) return res.status(400).json({message: "Faltan datos por completar"})
    next()
}

module.exports = validaMovie;
