//package.json interview answer
//project info
//scripts : commands to run our project
//list of packages / dependency
//github info

//we can check in package.json file which file will be our first file to run.

//middileware : a function which run with every api call
//use of middileware
//1 data validation
//2 dauthentication
//3 data conversion
//4 in role based authorization

//how to apply middileware in nodejs : by using use() method of express package
//types of middileware
//1 custom : function made by us as a middileware
// 2 predefined :- express.json() // this middileware use to convert our json object to js object or vice-verca

//benifits of nodemon usage
//server refreshed or restart automatically whenever we save some changes


//multiple controllers and next()
// let tttt = (req , res , next )=>{
//     console.log("from controller sssss");
//     if(false)
//     {
//         return res.send("fffff")
//     }
//     next()
// }

// let aaaa = (req , res   )=>{
//     console.log("from controller www ");
//     return res.send("hi") 
// }

// app.get("/user" ,  tttt , aaaa )

// // , (req , res)=>{
// //     return res.status(200).json({ msg : "success" })
// // }






//custom middileware
// const ab = (req , res  , next)=>{
//     let data = req.body;
//     console.log("from middileware", data);
//     req.body.rate =  req.body.rate + 2;
//     console.log("i m middileware")
//     next()
// }
// app.use(ab)

// app.get("/user" , ( req , res )=>{
//     let requestData = req.body;
//     console.log("from constroller", requestData);
//     console.log("yes working");
//     return res.send("yes i m done")
// })


//promise handling ways
//callback
//then catch
//async await