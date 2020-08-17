const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/db-methods",
{
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("connected to the database"))

app.use("/books", require("./bookRouter.js"))
app.use("/authors", require("./authorRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
} )

app.listen(9000, () => {
    console.log("server is running on 9000 port")
}) 