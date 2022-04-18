//require address model 
const brandModel = require('../model/brand.model')

//add an brand
const addBrand = (req , res)=>{
    
let doc = new brandModel (req.body)
doc.save().then((data)=>{
    console.log("then inside");
    return res.json({result : data , msg : "brand added"})
}).catch((err)=>{
    console.log("catch inside");
    return res.send({ msg : "something went wrong" , error : err})})}


//delete brand
const deleteBrand =(req , res )=>{
    let brandId = req.query.id
    
    brandModel.findByIdAndDelete({_id: brandId}, (err, result)=>{
        if (err) {
            return res.status(400).json({reslt : result, msg : "unable to find and delete brand"})
        } else {
            if (result == null) {
            
                return res.status(201).json({msg : "brand does not exist"})
            } else {
            return res.status(200).json({result : result , msg : "successfully delete brand"})
                
            }
        }
    })}

//update brand
const updateBrand = (req , res)=>{
    let Id = req.query.id
    let dataToUpdate = {subCatId : req.body.subCatId , brandName : req.body.brandName ,brandCode : req.body.brandCode}

    console.log(dataToUpdate);
    //1 where , 2 set : what to update
    brandModel.findByIdAndUpdate(Id , dataToUpdate , (err , data)=>{
            if(err)
        {
            return res.status(400).json({error : err , msg : "Your request could not be processed. Please try again."})
        }else{
                return res.status(200).json({ msg : "brand has been updated successfully!"})
           
        }
    })
}   

//update brand status
const updateBrandStatus = (req, res)=>{
    let Id = req.query.id

    let dataToUpdate = {approval : req.body.approval}

    brandModel.findOneAndUpdate(  { _id : Id } , dataToUpdate , (err , data)=>{
        if(err)
    {
        return res.status(400).json({error : err , msg : "Your request could not be processed. Please try again."})
    }else{
            return res.status(200).json({ msg : "brand has been updated successfully!"})
       
    }
})
}




module.exports = {addBrand , deleteBrand , updateBrand , updateBrandStatus}