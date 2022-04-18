const express = require('express')

const route = express.Router()

const {
    addAddress,
    deleteAddress,
    updateAddress
} = require('../controller/address.controller')

//add an address in address model 
route.post('/addAddress', addAddress)

//delete an address 
route.delete('/deleteAddress', deleteAddress)

//update an address
route.put('/updateAddress', updateAddress)

module.exports = route