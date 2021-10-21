require('dotenv').config()
const mongoose = require('mongoose')

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_DB)
    console.log("Conexión exitosa")
  } catch (error) {
    console.log(error)
  }
} 

connectionDB()
module.exports = connectionDB