const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

// signup
authRouter.post("/signup", (req, res, next) => {
    console.log(req.body)
    User.findOne({ username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            console.log("11")
            res.status(500)
            return next(err)
        }
        if(user){
            console.log("15")
            res.status(403)
            return next(new Error("That Username is taken"))
        }
        const newUser = new User(req.body) 
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }

            //  payload    secret
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ token, user: savedUser })
        })
    })
})
    // login
    authRouter.post("/login", (req, res, next) => {
        console.log(req.body, "userRouter 35" )
        User.findOne({ username: req.body.username }, (err, user) => {
                if(err){
                res.status(500)
                return next(err)
            }
            if(!user){
                res.status(403)
                return next(new Error("Username and password do not match our files"))
            }

            user.checkPassword(req.body.password, (err, isMatch) => {
                if(err){
                    res.status(403)
                    return next(new Error("Username or Password are incorret"))

                }
                if(!isMatch){
                    res.status(403)
                    MediaElementAudioSourceNode(new Error("that is incorrect"))
                }
            } )


            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ token, user: user.withoutPassword })
            
        })
        
})

     

module.exports = authRouter