const bcrypt = require('bcrypt')
const {User} = require('../../models/siteUser/User')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const {username, email, password} = req.body

    const hashPassword  = bcrypt.hashSync(password, 8)

    const regis = await User.create({
        username : username,
        email : email,
        password : hashPassword
    })

    return res.status(201).send({
        message : "create user success"
    })
}

const allUsers = async (req, res) => {
    const all = await User.findAll()

    return res.status(200).send({
        message : "All user data retrieved",
        data : all
    })
}

const login = async (req, res) => {
    const data = req.userInfo

    const token = jwt.sign({id: data.id, username: data.username}, process.env.JWT_SECRET, {expiresIn: 3600})

    return res.status(200).send({
        message : "login success", 
        data : token
    })
}

const uploadProfilePic = async (req, res) => {
    const userData = req.user
    console.log('user data', userData)
    const file = req.file

    const updateProfileField = await User.update({picture: file.path}, {where: {id: userData.id}})

    return res.status(200).send({
        message : "upload success"
    })
}

module.exports = {register, allUsers, login, uploadProfilePic} 