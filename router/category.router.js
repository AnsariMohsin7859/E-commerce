//require express 
const express = require ("express")

//use route from express package 
const route = express.Router()

//require controller from category route 
const  {sendCatData, getAll,  getCatInfo, updateCatName, updateCatStatus, deleteCatData}  = require("../controller/category.controller")

//send data to category 
route.post("/addCategory" , sendCatData)

//get all category list 
route.get("/allCategory",getAll )

//get one category info 
route.get("/category/:id",getCatInfo )

//update category name via id
route.put("/category/name/:id",updateCatName)

//update category status via id 
route.put("/category/status/:id", updateCatStatus)

//delete category via id 
route.delete("/category/:id", deleteCatData)

//export route 
module.exports = route