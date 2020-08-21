const mongoose = require('mongoose')
const Schema = mongoose.Schema



const commentsSchema = new schema({
    comments:{
        type: String,

    },
  
})

module.exports = mongoose.model("Comments", userSchema)