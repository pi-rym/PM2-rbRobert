// index.js este es el entrypoint de la aplicacion es el modulo que se ejecuta cuando la aplicacion se ejecuta
const app = require('./src/server')

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})