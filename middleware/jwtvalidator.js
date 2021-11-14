const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtvalidator = async(req,res,next) =>{
    
    const token = req.headers['accesstoken']
    
    if(token){
        jwt.verify(token, process.env.SECRET, (err) =>{
            if(err){
                res.json({msg: 'Token Invalido'})
            } else{
                next()
            }

        })
    } else {
        res.json({msg: 'Token Inexistente'})
    }

}

module.exports = { jwtvalidator }