const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
// const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const mysql = require('mysql');
app.use(express.json())
app.use(morgan('dev'))

// mongoose.connect(
//   'mongodb://localhost:27017/user-authentication',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   },
//   () => console.log('Connected to the DB')
// )


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'secret'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ');
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
 
// myRouter.route("/getdata")
// .get((req, res) => {
//   let sql = `SELECT * FROM db;`
//   db.query(sql, (err, result) => {
//     if (err){
//       throw err;
//     }
//     console.log("YOU have  Data")
//     res.send(result)
//   })
// })
// connection.end();


app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256']})) // req.user
app.use('/api/todo', require('./routes/todoRouter.js'))

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})
