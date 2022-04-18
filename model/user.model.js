// const mongoose = require ('mongoose')
const {
    Schema,
    model
} = require('mongoose')

const crypto = require('crypto')

const userSchema = new Schema({

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

    }
})



let userModel = model("user", userSchema)

module.exports = userModel