const User = require('../models/users')
require('dotenv').config
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



const loginUser = async(req,res) =>{
  
  const { email , password } = req.body
  
  const searchEmail = await User.find({email: email})
  
  if(searchEmail.length > 0){

    const match = bcrypt.compareSync(password , searchEmail[0].password)
    
    if (match) {
      const payload = {
        check:true
  
      }
    
      const token = jwt.sign(payload, process.env.SECRET, {
        expiresIn: '1h'
      })
  
      const frontUser = {
        name : searchEmail[0].name,
        email: searchEmail[0].email,
        admin : searchEmail[0].admin
      }
  
      res.status(200).json({'msg':'Usuario logueado correctamente', frontUser, token: token})
      return
    } else {
  
      res.status(401).json({'msg':'Usuario o constraseña invalida perro'})
  
    }
  } else {
    res.status(404).json({'msg':'Usuario inexistente'})

  }
}

module.exports = { loginUser }

