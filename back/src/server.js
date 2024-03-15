const express = require('express')
const indexRouter = require('./routes/index')
const morgan = require('morgan')
const cors = require('cors')

// const app = express() 
// app.use(indexRouter);

const app = express()  

// * pre-build
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// * Los personalizados
app.use((req, res, next)=>{
    console.log('mi primer middleware personalizado');
    next()
})

const funcionMiddleware = (req, res, next) => {
    console.log(`He recibido una request del tipo ${req.method} a la ruta ${req.url}`);
    next()
}

app.use(funcionMiddleware)

app.use(indexRouter);

module.exports = app