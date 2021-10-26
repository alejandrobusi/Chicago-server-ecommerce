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
  imgUrl: String,
})

module.exports = model('Product', product)