const express = require('express')
const {register, allUsers, login, uploadProfilePic} = require('../../controllers/userController/userController');
const { regisValidator, loginValidator } = require('../../middlewares/authectication/authValidator');
const { verify } = require('jsonwebtoken');
const { uploadProfile } = require('../../middlewares/authectication/uploadProfile');


const router = express.Router();

router.post('/register',regisValidator, register);
router.get('/all', allUsers);
router.post('/login',loginValidator, login)
router.post('/profile', uploadProfile.single('foto'), uploadProfilePic)

module.exports = router;
