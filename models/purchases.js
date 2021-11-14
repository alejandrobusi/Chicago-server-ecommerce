const { Schema, model } = require('mongoose')

const purchase = new Schema({
  name: String,
  apellido: String,
  email: String,
  calle: String,
  altura: String,
  piso: String,
  unidad: String,
  telefono: String,
  items: Array,

})

module.exports = model('Purchase', purchase)