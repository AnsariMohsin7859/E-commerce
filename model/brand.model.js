const mongoose = require("mongoose")
const {
    Schema,
    model
} = require("mongoose")

let brandSchema = new Schema({
    subCatId: {
        type: Schema.Types.ObjectId,
        ref: 'subCat'
    },
    brandName: {
        type: String,
        required: true,
        trim: true
    },
    brandCode: {
        type: Number,
        required: true
    },
    updatedDate: {
        type: Date,
        default: Date.now()
    },
    approval: {
        type: Boolean,
        default: false
    }

})
//1 collection name , 2 schema object
let brandModel = model("brand", brandSchema)
module.exports = brandModel;