const mongoose = require("mongoose")

const addSchema  = new mongoose.Schema({

    name:{
        type: String,
        required:true
    },

    date:{
        type: Date,
        required: true,
    },

    school:{
        type: String,
        required:true
    },

    class:{
        type: String,
        required:true
    },

    division:{
        type: String,
        required:true
    },

    status:{
        type: String,
        
    }
})

const Add = new mongoose.model("add", addSchema);
module.exports = Add