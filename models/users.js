const { Schema, model } = require('mongoose')

const user = new Schema({
  email: String,
  password: String,
})

module.exports = model('User', user)