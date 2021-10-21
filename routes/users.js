const { Router } = require('express')
const { createUser } = require('../controllers/users')
const route = Router()

route.post('/users', createUser)

module.exports = route 