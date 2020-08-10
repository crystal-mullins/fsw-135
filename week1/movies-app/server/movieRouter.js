const express = require('express')
const movieRouter = express.Router()
// const uuid = require('uuid/v4')
const Movie = require('./movie.js')



// get all
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        else{return res.status(200).send(movies)}
    }

    )
    // res.status(200)
    // res.send(Movie)
})
// post One
movieRouter.post("/",(req, res, next) => {
  const newMovie = new Movie(req.body)
  newMovie.save((err, savedMovie) => {
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(201).send(savedMovie)
  })
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
// get by genre
movieRouter.get("/search/genre", (req, res, next) =>
{
    Movie.find({ genre: req.query.genre}, (err, movies) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
} )



// delete one
movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({ _id: req.params.movieId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(200).send(`Successfully deleted item ${deletedItem.title}` )
    })
})

// update One
movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId },
        req.body,
        {new: true}, 
        (err, updatedMovie) => {
           if(err){
               res.status(500)
               return next(err)
           } 
           return res.status(201).send(updatedMovie)
        } 
    )
})


module.exports = movieRouter