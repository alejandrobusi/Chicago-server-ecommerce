const { Router } = require('express')
const { createUser } = require('../controllers/users')
const { body } = require('express-validator');
const route = Router()

route.post('/users',
body('name').trim().escape().notEmpty().withMessage("name empty").isLength({max : 60}).withMessage('maximum character is 60'),

createUser)

module.exports = route 