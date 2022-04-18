//require mongoose package for daba connection 
const mongoose = require("mongoose");


//create connection to database 
let db = mongoose.connect("mongodb://localhost:27017/mern007", {}, (err) => {
    if (err) {
        console.log("connectivity error", err);
    } else {
        console.log("database connected -- mern007");
    }
})

// .then((result)=>{
//     console.log("database connected");
// }).catch((err)=>{
//     console.log("connectivity error",err);
// })

//export database connection to other file 
module.exports = db