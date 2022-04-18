// const mongoose = require ('mongoose')
const {
    Schema,
    model
} = require('mongoose')

const {
    default: mongoose
} = require('mongoose')
const {
    required
} = require('nodemon/lib/config')


const sellerSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    shopeName: {
        type: String,
        required: true,
        trim: true
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }],
    status: {
        type: Boolean
    }
})



let sellerModel = model("seller", sellerSchema)

module.exports = sellerModel