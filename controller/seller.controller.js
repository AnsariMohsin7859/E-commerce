const sellerModel = require("../model/seller.model");

//send data of subcategory to db
const sendSellerData = (req, res) => {
  let sellerName = req.body.name;
  let sellerEmail = req.body.email;
  let dateCreated = req.body.password;
  let sellerNumber = req.body.number;
  let sellerShopeName = req.body.shopeName;
  let sellerAddress = req.body.address;
  let sellerStatus = req.body.status;
  let doc = new sellerModel({
    name: sellerName,
    email: sellerEmail,
    password: dateCreated,
    number: sellerNumber,
    shopeName: sellerShopeName,
    address: sellerAddress,
    status: sellerStatus,
  }); //insert , update
  // doc.save((err , data)=>{
  //     if(err)
  //     {
  //         return res.status(400).json({error : err , msg : "failed with adding"})
  //     }else{
  //         return res.status(201).json({result : data , msg : "successfully added"})
  //     }
  // })

  // doc.save().then((data)=>{
  //     console.log("then me");
  //     return res.send(data)
  // }).catch((err)=>{
  //     console.log("catch me");
  //     return res.send(err)})

  // doc.save().then((data)=>{
  //     console.log("then me");
  //     return res.send(data)
  // } ,
  // (err)=>{
  //     console.log("catch me");
  //     return res.send(err)}  )

  let resp = doc.save();

  resp
    .then((data) => {
      console.log("then inside");
      return res.json({
        result: data,
        msg: "seller added succesfully",
      });
    })
    .catch((err) => {
      console.log("catch inside");
      if (err.code == 11000) {
        return res.send({
          msg: "already exist seller",
          error: err,
        });
      }
      return res.send({
        msg: "something went wrong",
        error: err,
      });
    });
};

//get list of seller
const getAllSeller = async (req, res) => {
  let page = req.query.pageNo - 1;
  let limit = req.query.limit;
  let skip = page * limit;
  sellerModel
    .find()
    .limit(limit)
    .skip(skip)
    .then((data) => {
      return res.status(200).json({
        total: data.length,
        msg: "successfully got seller list",
        result: data,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err,
        msg: "failed to get seller list",
      });
    });
};

//get one seller info
const getSeller = (req, res) => {
  let id = req.params.id;
  sellerModel
    .findById(id)
    .then((data) => {
      console.log(data);

      return res.status(200).json({
        msg: "successfully got seller",
        result: data,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: err,
        msg: "failed to get seller",
      });
    });
};

// //delete a seller by id
const deleteSeller = (req, res) => {
  let sellerid = req.query.id;

  sellerModel.findByIdAndDelete(
    {
      _id: sellerid,
    },
    (err, result) => {
      if (err) {
        return res.status(400).json({
          reslt: result,
          msg: "unable to find and delete seller",
        });
      } else {
        if (result == null) {
          return res.status(201).json({
            msg: "seller does not exist",
          });
        } else {
          return res.status(200).json({
            result: result,
            msg: "successfully delete seller",
          });
        }
      }
    }
  );
};

//update seller details
const updateSellerDetails = (req, res, next) => {
  let Id = req.query.id;
  let dataToUpdate = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    shopeName: req.body.shopeName,
  };

  console.log(dataToUpdate);
  //1 where , 2 set : what to update
  sellerModel.findOneAndUpdate(
    {
      _id: Id,
    },
    dataToUpdate,
    (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
          msg: "Your request could not be processed. Please try again.",
        });
      } else {
        return res.status(200).json({
          msg: "seller details has been updated successfully!",
        });
      }
    }
  );
};

//update seller status
const updateSellerStatus = (req, res, next) => {
  let SellerId = req.query.id;
  let status = req.body.status;
  let dataToUpdate = {
    status: status,
  };
  //1 where , 2 set : what to update
  sellerModel.findByIdAndUpdate(
    {
      _id: SellerId,
    },
    dataToUpdate,
    (err, data) => {
      if (err) {
        return res.status(400).json({
          error: err,
          msg: "Your request could not be processed. Please try again.",
        });
      } else {
        return res.status(200).json({
          msg: "Seller status been updated successfully! as " + status,
        });
      }
    }
  );
};

//export all controller to other file
module.exports = {
  sendSellerData,
  getAllSeller,
  getSeller,
  deleteSeller,
  updateSellerDetails,
  updateSellerStatus,
};
