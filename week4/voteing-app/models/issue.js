const mongoose = require('mongoose')
const Schema = mongoose.Schema



const issueSchema = new schema({
    issue:{
        type: String,
    

    },
 
 
})

module.exports = mongoose.model("Issue", userSchema)