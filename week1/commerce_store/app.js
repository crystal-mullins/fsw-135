const express = require("express");
const app = express();
const {v4:uuidv4} = require('uuid')
const morgan = require('morgan')
// const items = require("./routes/items")
app.use(morgan('dev'))
app.use(express.json())
const items =[
    {
        item:{
            type:"OG",
            required: true,
           
        },
        price:{
            type: 2000,
            required: true,
            

        },
        description:{
            type: "Dark green with a strong smell",

        },
        isForSale: true,
        _id:uuidv4()
    },
    {
        item:{
            type:"Sour Diesel",
            required: true
        },
        price:{
            type: 2200,
            required: true,
            

        },
        description:{
            type: "Light green with a strong smell",

        },
        isForSale: true,
        _id:uuidv4()
    },
    {
        item:{
            type:"OG",
            required: true
        },
        price:{
            type: 2000,
            required: true,
            

        },
        description:{
            type: "Dark green with a strong smell",

        },
        isForSale: true,
        _id:uuidv4()
    },
    {
        item:{
            type:"Purle Haze",
            required: true
        },
        price:{
            type: 1500,
            required: true,
            

        },
        description:{
            type: "Large purple buds great for joint rolling",

        },
        isForSale: true,
        _id:uuidv4()
    }
]

// get all
// app.get('/', (req, res, next) => {
//     items.find((err, items) =>{
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         else{return res.status(200).send(items)}
//     })
    
// });
app.get("/", (req, res) => {
    res.send(items)

})

// get one
app.get("/:itemId", (req, res, next) => {
    const itemId = req.params.itemId
    const foundItem = items.find(item => item._id === itemId)
    if(!foundItem)
    {
        const error = new ErrorEvent(`The item with id ${itemId} was not found `)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundItem)
})

// post
app.post("/items", (req, res) => {
    const newItem = req.body
    newItem._id = uuid()
    items.push(newItem)
    res.send(`Successfully added ${newItem} to the database`)

})
// post One
// app.post("/",(req, res, next) => {
//     const newItem = new Item(req.body)
//     newItem.save((err, savedItem) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(savedItem)
//     })
//   }) 

// put
app.put("/items/:itemsId", (req, res) => {

    const itemsId = req.params.itemsId
    console.log(itemsId)
    const updateObject = req.body
    const itemsIndex = items.findIndex(items => items._id === itemsId)
    const updatedItems = Object.assign(items[itemsIndex], updateObject)
    res.send(updatedItems)

})

// get by genre
app.get("/search/item", (req, res, next) =>
{
    Movie.find({ item: req.query.item}, (err, item) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
} )



// delete one
app.delete("/:itemId", (req, res, next) => {
    Items.findOneAndDelete({ _id: req.params.itemId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(200).send(`Successfully deleted item ${deletedItem.item}` )
    })
})

// update One
app.put("/:itemId", (req, res, next) => {
    Item.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        {new: true}, 
        (err, updatedItem) => {
           if(err){
               res.status(500)
               return next(err)
           } 
           return res.status(201).send(updatedItem)
        } 
    )
})




app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});