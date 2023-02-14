const mongoose = require("mongoose")
const signupSchema = mongoose.Schema({
    first_name : String ,
    last_name : String ,
    email : String ,
    password : String ,
})
const signupModel = mongoose.model("user" , signupSchema)
module.exports = signupModel