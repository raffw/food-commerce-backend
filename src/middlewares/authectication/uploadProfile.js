const multer = require('multer')
const {User} = require('../../models/siteUser/User');
const { where } = require('sequelize');

const uploadDir = process.cwd() + "/upload"
const uploadProfile = multer({dest: uploadDir})


module.exports= {uploadProfile}