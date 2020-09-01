import React, { useState } from 'react'

const initInputs ={
    title:"",
    description:"",
    imgUrl:""
}

export default function TodoForm(){
    const[inputs, setInputs] = useState(initInputs)

   function handleChange(e){
       const {name, value} = e.target
       setInputs(prevInputs => ({
           ...prevInputs,
           [name]: value
       }))
   }
   function handleSubmit(e){
    e.preventDefault()
    // add todo
}

const {title, description, imgUrl} = inputs
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
            placeholder="Title"/>

            <input
            type="text"
            value={description}
            name="description"
            onChange={handleChange}
            placeholder="description"/>

            <input
            type="text"
            value={imgUrl}
            name="imgUrl"
            onChange={handleChange}
            placeholder="Image Url"/>

            <button>Add Product</button>
        </form>
    )
}