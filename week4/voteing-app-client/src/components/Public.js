// import React from 'react'

// import TodoList from './TodoList.js'
// import Todo from './Todo.js'

// export default function Public(){
//     return(
//         <div className="public">
//             <h1>Shakedown Street Market Place</h1>
//             <h3>Top Sellers</h3>
           
//             <h3>Great Deals all day!!</h3>
//         </div>
//     )
// }

import TodoList from './TodoList'
import TodoForm from './TodoForm.js'
import Todo from './Todo.js'
import addTodo from './AllTodosList'
import {AllTodosList} from './AllTodosList'
import { UserContext } from '../context/UserProvider.js'
import React, { useContext } from 'react'

export default function Public(props){
  const { allState } = useContext(UserContext)
    // const { addTodo } = props
    console.log(allState.todos, "public")
    // const { todos } = props
  return (
    <div className="public">
        <h1>Stalk Market</h1>

        
        {/* <AllTodosList /> */}
         {/* <TodoForm addTodo={addTodo}/> */}
      <h3>Your Todos</h3>
      <TodoList todos={allState.todos}/> 
        
        {/* <Todo /> */}
    {/* <TodoList todos={todos}/> */}
    </div>
  )
}

