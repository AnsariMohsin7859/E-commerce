const express = require('express')

const route = express.Router()

const {
    addBrand,
    deleteBrand,
    updateBrand,
    updateBrandStatus
} = require('../controller/brand.controller')

route.post('/addBrand', addBrand)

route.delete('/deleteBrand', deleteBrand)

route.put('/updateBrand', updateBrand)

route.put('/updateBrandStatus', updateBrandStatus)

module.exports = route