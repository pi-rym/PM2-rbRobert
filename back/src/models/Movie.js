const { Schema, model, trusted } = require('mongoose')

const movieSchema = new Schema({
    id: { 
        type: String, 
        unique: true 
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genre: {
        type: [String],  // type: Array
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
}, { toJSON: { virtuals: true } })

const Movie = model('Movie', movieSchema)

module.exports = Movie;


