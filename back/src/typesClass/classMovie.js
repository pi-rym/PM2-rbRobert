class Movies {
    constructor({_id,title, year, director, duration, genre, rate, poster}){
        if(!title || !year || !director){  
            throw new Error('Campos requeridos faltantes.');
        }
        this._id = _id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

module.exports = Movies;