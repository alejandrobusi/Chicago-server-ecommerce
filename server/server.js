require('dotenv').config()
require('../database/database')
const express = require('express')
const app = express()
const users = require('../routes/users')
const products = require('../routes/products')
const login = require('../routes/login')
const purchases = require('../routes/purchases')
const port = process.env.PORT


app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, accesstoken');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', users)
app.use('/', login)
app.use('/', products)
app.use('/', purchases)

app.listen(port, () => console.log(`listening to the port : ${port}`))