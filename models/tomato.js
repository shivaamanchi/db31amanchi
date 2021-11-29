const mongoose = require("mongoose")
const tomatoSchema = mongoose.Schema({
    type:{
        type: String,
        minLength: 3,
        maxLength: 50
    },
    
    expdate: String,
    
    cost: {
        type:Number,
        min:1,
        max:9.5
    }
    })
module.exports = mongoose.model("tomato",
    tomatoSchema)