//require express from npm 
const express = require("express");

//require database config from dbconfig file 
const db = require("./confige/dbconfig");

//use app from express
const app = express();

//middileware for converting data from json to js and js to json 
app.use( express.json() )

//require route of category 
const catRoute = require("./router/category.router")

//require route of subcategory
const subCatRoute = require("./router/subcategory.router")

//require route of user 
const userRoute = require ('./router/user.router')

//require route of seller
const sellerRoute = require('./router/seller.router')

//middleware for category api 
app.use("/category" , catRoute)

//middleware for subcategory api
app.use("/subcategory" , subCatRoute)

//middleware for user api
app.use("/user" , userRoute)

//middleware for seller api 
app.use('/seller' , sellerRoute)

//server creation
app.listen(1007 , (err)=>{
    if(err)
    {
        console.log("error",err);
    }else{
        console.log("server is running on port 1007");
    }
})
// let data = await app.listen(3306)
// data.then(()=>{
//     console.log("server is working ");
// }).catch((err)=>{
//     console.log("server is not working ");
// })