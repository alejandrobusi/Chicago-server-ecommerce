const User = require('../models/users')
const bcrypt = require('bcrypt')


const createUser = async(req,res) =>{
  
  const { email, password } = req.body

  const newUser = new User({
    email,
    password
  })
  
  const salt = bcrypt.genSaltSync();
  newUser.password = bcrypt.hashSync(password, salt);

  await newUser.save()
  res.json(`User ${newUser} created`) 
}

module.exports = { createUser }
