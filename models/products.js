const { Schema, model } = require('mongoose')

const product = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  author: String,
  stock: Number,
  isbn: Number,
  fav: Boolean,
})

module.exports = model('Product', product)