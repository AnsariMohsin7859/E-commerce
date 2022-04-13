const express = require ('express')

const route = express.Router()

route.post('/addAddress' , addAddress)

module.exports = route