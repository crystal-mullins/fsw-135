const mongoose = require('mongoose')
const Shcema = mongoose.Schema



const userSchema = new schema({
    username:{
        type: String,
        required: true, 
        lowercase: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    
    memberSince:{
            type: Date,
            default: Date.now
        
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("User", userSchema)