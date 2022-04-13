const userModel = require("../model/user.model")
const db = require("../confige/dbconfig");

const bcrypt = require('bcrypt');
const { async } = require("jshint/src/prod-params");

const userSignup = async (req, res) => {

    let body = req.body

    if (!(req.body.email && req.body.password && req.body.name)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await userModel.findOne({ email : req.body.email  });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    let user = new userModel(body)
    console.log(user);


    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);

    user.save((err, data) => {
        if (err) {
            return res.status(400).json({ error: err, msg: "failed with adding" })
        } else {
            return res.status(201).json({ result: data, msg: "successfully added" })
        }
    })

}

const userLogin =  async (req, res) => {
    const body = req.body;
    const user = await userModel.findOne({ email: body.email });
    if (user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
        res.status(200).json({ message: "user logged in " });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      } 
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
  };





module.exports = { userSignup, userLogin }

