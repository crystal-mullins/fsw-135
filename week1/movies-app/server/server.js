const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware for requests
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/moviesdb',
{
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true, 
   useFindAndModify: false
},
()=> console.log('connected to the DB')
)

// Routes
app.use('./movies', require('./routes/movieRouter.js'))
app.use('./tvshows', require('./routes/tvshowRouter.js'))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.sent({errMsg: err.message})
})

// server listen
app.listen(9001, () => {
    console.log('The server is running on port 9001')

})