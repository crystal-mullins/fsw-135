const express = require('express')
const itemRouter = express.Router()
// const uuid = require('uuid/v4')
const Item = require('./Items.js')



// get all
itemRouter.get("/", (req, res, next) => {
    Items.find((err, items) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        else{return res.status(200).send(items)}
    }

    )
    // res.status(200)
    // res.send(Movie)
})
// post One
itemRouter.post("/",(req, res, next) => {
  const newItem = new Item(req.body)
  newItem.save((err, savedItem) => {
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(201).send(savedItem)
  })
}) 

// get one
itemRouter.get("/:itemId", (req, res, next) => {
    const itemId = req.params.itemId
    const foundItem = items.find(itme => item._id === itemId)
    if(!foundItem)
    {
        const error = new ErrorEvent(`The item with id ${itemId} was not found `)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundItem)
})
// get by item name
itemRouter.get("/search/item", (req, res, next) =>
{
    Item.find({ item: req.query.item}, (err, items) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
} )



// delete one
itemRouter.delete("/:itemId", (req, res, next) => {
    Item.findOneAndDelete({ _id: req.params.itemId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(200).send(`Successfully deleted item ${deletedItem.item}` )
    })
})

// update One
itemRouter.put("/:itemId", (req, res, next) => {
    Item.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        {new: true}, 
        (err, updatedItme) => {
           if(err){
               res.status(500)
               return next(err)
           } 
           return res.status(201).send(updatedItem)
        } 
    )
})


module.exports = itemRouter