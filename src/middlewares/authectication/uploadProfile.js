const multer = require('multer')
const { User } = require('../../models/siteUser/User');
const { where } = require('sequelize');

const uploadDir = process.cwd() + "uploads/"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const uploadProfile = multer({ storage: storage })


module.exports = { uploadProfile }
