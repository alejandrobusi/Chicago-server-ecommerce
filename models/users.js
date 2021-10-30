const { Schema, model } = require('mongoose')

const user = new Schema({
  email: String,
  password: String,
  name: String,
  points: Number,
  premium: Boolean,
  admin: Boolean,
  loggedIn: Boolean,
  favs: Array,
})

module.exports = model('User', user)