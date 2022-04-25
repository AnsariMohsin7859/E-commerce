//require mongoose package for daba connection
const mongoose = require("mongoose");

require("dotenv").config();

//create connection to database
let db = mongoose.connect(process.env.DB_URL, {}, (err) => {
  if (err) {
    console.log("connectivity error", err);
  } else {
    console.log("database connected");
  }
});

// .then((result)=>{
//     console.log("database connected");
// }).catch((err)=>{
//     console.log("connectivity error",err);
// })

//export database connection to other file
module.exports = db;
