const mongoose = require("mongoose")
const wishCardSchema = mongoose.Schema({
    img : Number ,
    name : String ,
    text : String ,
    color : String ,
    size : String ,
    rating : String ,
    price : String ,
    quantity : String ,
})
const wishCardModel = mongoose.model("wishCard" , wishCardSchema)
module.exports = wishCardModel