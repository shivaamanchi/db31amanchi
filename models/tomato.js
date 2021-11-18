const mongoose = require("mongoose")
const tomatoSchema = mongoose.Schema({
    type: String,
    expdate: String,
    cost: Number
})
module.exports = mongoose.model("tomato",
    tomatoSchema)