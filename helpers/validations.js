const User = require('../models/users')
const Product = require('../models/products')

const validationEmail = async (email) => {

  const isEmail = await User.findOne({email})

  if (isEmail){
    throw new Error(`the mail ${email} is already registered`)
  }
}

const validationIsbn = async (isbn) => {

  const isIsbn = await Product.findOne({isbn})

  if (isIsbn){
    throw new Error(`the book "${isIsbn.name}" with isbn ${isbn} is already registered `)
  }
}

const validationMinMaxIsbn = (isbn) => {
  
  const isbnString = isbn.toString()

  if (isbnString.length < 10 || isbnString.length > 13){
    throw new Error(`sale`)
  }
}

module.exports = { validationEmail, validationIsbn, validationMinMaxIsbn }
