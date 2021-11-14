const Purchase = require('../models/purchases')
const { validationResult } = require('express-validator');

const createPurchase = async( req,res ) => {
  try {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  const {nombre, apellido, email, calle, altura, piso, unidad, telefono, items} = req.body

  const newPurchase = new Purchase({
    nombre,
    apellido,
    email,
    calle,
    altura,
    piso,
    unidad,
    telefono,
    items,
  })
  
  await newPurchase.save()
  res.json(`Compraste: "${newPurchase.nombre}" !DISFRUTALO¡`) 
  
  } catch (error) {
    res.json(`something has failed. error : ${error}`) 
  }
}

const getPurchases = async(req,res) =>{

  const products = await Product.find({})
  
  res.json(products)
}


const editPurchases = async ( req, res ) => {
  
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const productEdit = await Product.findByIdAndUpdate(req.params.prodId , req.body, {new: true})
  
  res.status(200).json(productEdit) 
  }


module.exports = { createPurchase, editPurchases, getPurchases }