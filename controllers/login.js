const User = require('../models/users')
const bcrypt = require('bcrypt')


const loginUser = async(req,res) =>{
  
  const { email , password } = req.body
  
  const searchEmail = await User.find({email: email})
  
  const match = bcrypt.compareSync(password , searchEmail[0].password)
  
  if (match) {
    res.status(200).json({'msg':'Usuario logueado correctamente'})
    return
  } else {
    res.status(401).json({'msg':'Usuario o constraseña invalida perro'})
  }
}

module.exports = { loginUser }

