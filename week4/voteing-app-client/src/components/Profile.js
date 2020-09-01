import React from 'react'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import Todo from './Todo.js'

export default function Profile(){
    return(
        <div className="profile">
            <h1>Welcome @Username!</h1>
            <h3>Add A Product description</h3>
            <TodoForm />
            <h3>Your Shelf</h3>
        </div>
    )
}
