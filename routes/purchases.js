const { Router } = require('express')
const { body } = require('express-validator');
const { jwtvalidator } = require('../middleware/jwtvalidator')
const { createPurchase, editPurchases, getPurchases } = require('../controllers/purchases');
const { validationIsbn, validationMinMaxIsbn } = require('../helpers/validations');
const route = Router()

route.post('/purchases', createPurchase)

route.get('/purchases', getPurchases)


module.exports = route 