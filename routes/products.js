const { Router } = require('express')
const { body } = require('express-validator');
const { jwtvalidator } = require('../middleware/jwtvalidator')
const { createProduct, deleteProduct, editProduct, getProducts } = require('../controllers/products');
const { validationIsbn, validationMinMaxIsbn } = require('../helpers/validations');
const route = Router()

route.post('/products', jwtvalidator,
body('name').trim().escape().notEmpty().withMessage("name empty").isLength({max : 60}).withMessage('maximum character is 60'),
body('description').trim().escape().notEmpty().exists().withMessage("description empty").isLength({max : 2100}).withMessage('maximum character is 2100'),
body('category').trim().escape().notEmpty().withMessage("category empty"),
body('price').trim().escape().isNumeric().withMessage('it is not number').notEmpty().withMessage("price empty"), 
body('author').trim().escape().notEmpty().withMessage("author empty").isLength({max : 40}).withMessage('maximum character is 30'),
body('stock').trim().escape().isNumeric().withMessage('it is not number').notEmpty().withMessage("stock empty"), 
body('isbn').isNumeric().withMessage('it is not number').notEmpty().withMessage("isnb empty"),
body('isbn').custom(validationIsbn),
body('editorial').trim().escape().notEmpty().withMessage("editorial empty"),
body('fav').isBoolean().withMessage('it is not boolear').notEmpty().withMessage("fav empty"), 
body('imgUrl').trim().notEmpty().withMessage("url empty").isURL().withMessage('it is not a url'),
body('quantity').isNumeric().withMessage('it is not numbers'),

createProduct)

route.get('/products', getProducts)

route.delete('/products', jwtvalidator,
body('isbn').isNumeric().withMessage('it is not number').notEmpty().withMessage("isnb empty"),

deleteProduct )


route.patch('/products/:prodId', jwtvalidator,
// body('name').trim().escape().notEmpty().withMessage("name empty").isLength({max : 60}).withMessage('maximum character is 60'),
// body('description').trim().escape().notEmpty().exists().withMessage("description empty").isLength({max : 2100}).withMessage('maximum character is 2100'),
// body('category').trim().escape().notEmpty().withMessage("category empty"),
// body('price').trim().escape().isNumeric().withMessage('it is not number').notEmpty().withMessage("price empty"), 
// body('author').trim().escape().notEmpty().withMessage("author empty").isLength({max : 40}).withMessage('maximum character is 30'),
// body('stock').trim().escape().isNumeric().withMessage('it is not number').notEmpty().withMessage("stock empty"), 
// body('isbn').isNumeric().withMessage('it is not number').notEmpty().withMessage("isnb empty"),
// body('isbn').custom(validationIsbn),
// body('editorial').trim().escape().notEmpty().withMessage("editorial empty"),
// body('fav').isBoolean().withMessage('it is not boolear').notEmpty().withMessage("fav empty"), 
// body('imgUrl').trim().notEmpty().withMessage("url empty").isURL().withMessage('it is not a url'),
editProduct)

module.exports = route 