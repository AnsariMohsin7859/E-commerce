//require address model
const addressModel = require("../model/address.model");

//add an address
const addAddress = (req, res) => {
  let doc = new addressModel(req.body);
  doc
    .save()
    .then((data) => {
      console.log("then inside");
      return res.json({
        result: data,
        msg: "address added",
      });
    })
    .catch((err) => {
      console.log("catch inside");
      return res.send({
        msg: "something went wrong",
        error: err,
      });
    });
};

//delete address
const deleteAddress = (req, res) => {
  let addressId = req.query.id;

  addressModel.findByIdAndDelete(
    {
      _id: addressId,
    },
    (err, result) => {
      if (err) {
        return res.status(400).json({
          reslt: result,
          msg: "unable to find and delete address",
        });
      } else {
        if (result == null) {
          return res.status(201).json({
            msg: "address does not exist",
          });
        } else {
          return res.status(200).json({
            result: result,
            msg: "successfully delete address",
          });
        }
      }
    }
  );
};

//update address
const updateAddress = (req, res) => {
  let Id = req.query.id;
  let dataToUpdate = {
    city: req.body.city,
    pinCode: req.body.pinCode,
    area: req.body.area,
    landmark: req.body.landmark,
    state: req.body.state,
    country: req.body.country,
    countryCode: req.body.countryCode,
    isPermanent: req.body.isPermanent,
  };

  console.log(dataToUpdate);
  //1 where , 2 set : what to update
  addressModel.findByIdAndUpdate(
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
          msg: "address has been updated successfully!",
        });
      }
    }
  );
};

module.exports = {
  addAddress,
  deleteAddress,
  updateAddress,
};
