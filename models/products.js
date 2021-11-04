const { Schema, model } = require('mongoose')

const product = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  author: String,
  stock: Number,
  isbn: Number,
  editorial: String,
  fav: Boolean,
  imgUrl: String,
  quantity: Number,
})

module.exports = model('Product', product)