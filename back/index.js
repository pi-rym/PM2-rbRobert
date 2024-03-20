// index.js este es el entrypoint de la aplicacion es el modulo que se ejecuta cuando la aplicacion se ejecuta
const app = require('./src/server')
const connectDB = require('./src/config/connectDB')

// app.listen(3000, () => {
//     console.log('Servidor escuchando en el puerto 3000');
// })

connectDB()
.then(()=> {
    app.listen(3000, ()=> console.log("server is listening on port 3000"))
})
.catch((err) => console.log("tenemos problemas con la conexión a la DB", err.message))