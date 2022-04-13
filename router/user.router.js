const express = require('express')
const {userSignup , userLogin} = require('../controller/user.controller')

const route = express.Router()

route.post('/signup' , userSignup)

route.get('/login' , userLogin)

module.exports = route