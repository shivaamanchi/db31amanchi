const mongoose = require("mongoose")
const tomatoPriceSchema = mongoose.Schema({
    type: String,
    expdate: String,
    cost: Number
})
module.exports = mongoose.model("Tomato",
    tomatoPriceSchema)