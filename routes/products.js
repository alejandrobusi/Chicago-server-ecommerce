const { Router } = require('express')
const { createProduct, deleteProduct } = require('../controllers/products')
const route = Router()

route.post('/products', createProduct)
route.delete('/products', deleteProduct )

module.exports = route 