const express = require('express')

const route = express.Router()

const {sendSellerData , getAllSeller , getSeller , deleteSeller , updateSellerDetails, updateSellerStatus}= require ('../controller/seller.controller')

//add a seller 
route.post('/addSeller' , sendSellerData) 

//get all seller list with paggination  
route.get('/getAllSeller' ,getAllSeller )

//get seller details by id 
route.get('/getSellerById/:id' , getSeller)

//delete seller by id 
route.delete('/deleteSeller/:id' , deleteSeller)

//update seller details
route.put('/updateSeller' , updateSellerDetails)

//update seller status 
route.put('/updateSellerStatus' , updateSellerStatus)


module.exports = route