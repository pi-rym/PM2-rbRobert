function moviesValidation(miObject) {
    if(!miObject.title || !miObject.director || !miObject.year){
        throw new Error('Campos requeridos faltantes.'); 
    }
    return true;
}

module.exports = moviesValidation;