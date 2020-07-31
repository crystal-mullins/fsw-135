const express = require('express')
const movieRouter = express.Router()
const uuid = require('uuid/v4')



// get all
movieRouter.get("/", (req, res) => {
    res.status(200)
    res.send(movies)
})

// get one
movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie)
    {
        const error = new ErrorEvent(`The item with id ${movieId} was not found `)
        res.status(500)
        return next(error)
    }
    res.status(200).send(soundMovie)
})

module.exports = movieRouter