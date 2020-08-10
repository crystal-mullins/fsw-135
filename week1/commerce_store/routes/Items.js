


const mongoose = require('mongoose')
const Schema = mongoose.Schema

// item blueprint
const itemSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseYear: Number
})

module.exports = mongoose.model('Item', itemSchema)