const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    todo : {
        type: String ,
    },
    create_at : {
        type: Date ,
        default : Date.now()
    }
})

const todoModel = mongoose.model("Todo" , todoSchema)
module.exports = todoModel