const mongoose = require("mongoose")
const requestSchema = mongoose.Schema({
    name: String,
    phone_number: String,
    email: String,
    category: String,
    threat: String,
    status: String,
    coordinates: Object,
})
const requestModel = mongoose.model("request", requestSchema)
module.exports = requestSchema