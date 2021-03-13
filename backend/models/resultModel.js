const { Schema, model } = require("mongoose")

const resultSchema = new Schema({
    name: String,
    score: Number
})

const Result = model("Result", resultSchema)
module.exports = Result