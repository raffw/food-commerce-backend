const validator = require('validator')
const user = require ('../../models/siteUser/User')
const bcrypt = require('bcrypt')

const regisValidator = async (req, res, next) => {
    const {username, email, password} = req.body

    if (!username || !password || !email){
        return res.status(400).send({
            message : "register failed, field must not empty"
        })
    }

    const isValidEmail = validator.isEmail(email, {host_whitelist: ['gmail.com']})
    if (!isValidEmail){
        return res.status(400).send({
            message : 'invalid email, use only google mail'
        })
    }
    const isValidPassword = validator.isStrongPassword(password)
    if (!isValidPassword){
        return res.status(400).send({
            message: 'pasword not strong enough. password must be 8 character'
        })
    }

    next()
}

const loginValidator = async (req, res, next) => {
    const {username, password} = req.body
    const getUser = await user.findOne({where: {username : username}})
    
    if (!getUser){
        return res.status(400).send({
            message : "Error, username not found"
        })
    }

    const dataUser = getUser.dataValues
    console.log(dataUser)

    const comparedPassword = bcrypt.compareSync(password, dataUser.password )
    if(!comparedPassword){
        return res.status(400).send({
            message: "error, incorrect password"
        })
    }
    req.userInfo = dataUser
    next()
}

module.exports= {regisValidator, loginValidator}
