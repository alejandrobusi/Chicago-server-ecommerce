const User = require('../models/users')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator');


const createUser = async(req,res) =>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  const { email, password, name, points, premium, admin, loggedIn} = req.body

  const newUser = new User({
    email,
    password,
    name,
    points,
    premium,
    admin,
    loggedIn
  })
  
  const salt = bcrypt.genSaltSync();
  newUser.password = bcrypt.hashSync(password, salt);

  await newUser.save()
  res.json(`User ${newUser.email} created`) 
}
const deleteUser = async ( req, res ) => {
  
  const { email } = req.body
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await User.deleteOne({ email: email });
  res.json(`it was successfully eliminated ${User} `)
}
module.exports = { createUser, deleteUser }

