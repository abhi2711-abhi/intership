const mongoose = require("mongoose")

const createSchema  = new mongoose.Schema({

    email:{
        type: String,
        required:true,
        unique:true
    },

    password:{
        type: String,
        required: true,
        
    }
})

const Create = new mongoose.model("create", createSchema);
module.exports = Create