const express = require('express')
const commerceRouter = express.Router()


const items =[
    {
        item:{
            type:String,
            required: true
        },
        price:{
            type: Number,
            required: true,
            

        },
        description:{
            type: String,

        },
        isForSale: true
    }
]




commerceRouter.get("/", (req, res) => {
    res.status(200)
    res.send(items)

})