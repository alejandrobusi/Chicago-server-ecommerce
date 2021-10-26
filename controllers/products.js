const Product = require('../models/products')


const createProduct = async( req,res ) => {
  
  try {
    const { name, description, category, price, author, stock, isbn, fav} = req.body

  const newProduct = new Product({
    name,
    description,
    category,
    price,
    author,
    stock,
    isbn,
    fav,
  })

  await newProduct.save()
  res.json(`product ${newProduct.isbn} created`) 

  } catch (error) {
    res.json(`something has failed. error : ${error}`) 
  }
}

const deleteProduct = async ( req, res ) => {
  await Product.findOneAndRemove(req, (error) =>{
    try {
        res.json(`si se pudo pa `)
    } catch (error) {
      res.json(`no se pudo pa ${error}`)
    }
  });
}

module.exports = { createProduct, deleteProduct }