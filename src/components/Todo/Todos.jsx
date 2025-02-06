import React from 'react'
import TodoList from './TodoList'

const Todos = (props) => {

  console.log(props.todos)
  return (
    <div>
      {props.todos.map(todo => <TodoList todo ={todo}></TodoList>)}
    </div>
  )
}

export default Todos