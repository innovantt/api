const express = require('express')
const { registerUser, userLogin } = require('../controllers/user.controller')
const { registerRules, validator } = require('../middlewares/validator')

const isAuth = require("../middlewares/passport-setup")



const Router = express.Router()


Router.post('/register', registerRules(), validator, registerUser)
Router.post('/login', userLogin)

Router.get('/currentuser', isAuth(), function (req, res) {
    res.json(req.user)
})

module.exports = Router