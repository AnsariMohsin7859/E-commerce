//require express 
const express = require("express")

//use route from express package
const route = express.Router()

//require controller from sub category controller 
const {
    sendSubData,
    getSubAll,
    getSubCatInfo,
    updateSubCatName,
    updateSubCatStatus,
    deleteSubData
} = require("../controller/subcategory.controller")


//send sub category data 
route.post("/addSubCat", sendSubData)

//get all sub category list 
route.get("/allSubCat", getSubAll)

//get one seb category info by if  
route.get("/SubCat/:id", getSubCatInfo)

//update sub category name by id 
route.put("/SubCat/:id", updateSubCatName)

//update sub category status by id 
route.put("/SubCat/status/:id", updateSubCatStatus)

//delete sub category by id 
route.delete("/SubCat/:id", deleteSubData)

//exports router to other file 
module.exports = route