const mongoose = require('mongoose')
require('dotenv').config()

// const URI = "mongodb+srv://rbRobert:PpwoP4A742XC0mhF@rbcluster.premmnz.mongodb.net/moviesDB?retryWrites=true&w=majority&appName=rbCluster";
const URI = process.env.URI

const connectDB = async () => {
   await mongoose.connect(URI)
}

module.exports = connectDB