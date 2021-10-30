const Product = require('../models/products')
const { validationResult } = require('express-validator');

const createProduct = async( req,res ) => {
  
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, description, category, price, author, stock, isbn, editorial, fav, imgUrl} = req.body

  const newProduct = new Product({
    name,
    description,
    category,
    price,
    author,
    stock,
    isbn,
    editorial,
    fav,
    imgUrl,
  })
  
  await newProduct.save()
  res.json(`product "${newProduct.name}" with isbn ${newProduct.isbn} created`) 
  
  } catch (error) {
    res.json(`something has failed. error : ${error}`) 
  }
}

const deleteProduct = async ( req, res ) => {
  
  const { isbn } = req.body
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await Product.deleteOne({ isbn: isbn });
  res.json(`it was successfully eliminated ${isbn} `)
}

module.exports = { createProduct, deleteProduct }