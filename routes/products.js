const { Router } = require('express')
const { body } = require('express-validator');
const { createProduct, deleteProduct } = require('../controllers/products')
const route = Router()

route.post('/products', createProduct)
route.delete('/products', body('isbn').notEmpty().withMessage("isnb vacio"),deleteProduct )

module.exports = route 