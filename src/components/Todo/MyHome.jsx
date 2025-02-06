import React, { useState } from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';

const MyHome  = () => {

  const dummyTodos = ['Demo1' , 'Demo2'];

  const [todos, setTodos] = useState(dummyTodos);
  const Dummytodos =(newData)=>{
    setTodos([...todos ,newData])
    console.log(newData)
  }
  return (
 
    <div>
      <NewTodo onTodo = {Dummytodos}></NewTodo>
      <Todos todos= {todos} ></Todos>
    </div>
  )
}

export default MyHome 