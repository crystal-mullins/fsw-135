const mongoose = require('mongoose')
const Schema = mongoose.Schema

// commerce store object blurprint
const commerceSchema = new Schema({
    item: 
    {
        type: String,
        required: true,
        unique: true
    },
    price: 
    {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true

    },
    isForSale: true,

})

module.exports = mongoose.model("Commerce", commerceSchema)