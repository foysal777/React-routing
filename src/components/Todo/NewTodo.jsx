import React, { useState } from 'react'

const NewTodo = (props) => {

    const [todo, SetTodo] = useState("");

    const HandleChange = (e) => {
        
        SetTodo(e.target.value);
       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo);
    }
    return (
        <div className='flex justify-center items-center'>

            <form onSubmit={handleSubmit}>
                <label className='text-4xl text-bold' htmlFor="">Todo App</label> <br />

                <input id='todo' name='todo' value={todo} onChange={HandleChange} type="text" className='border bg-sky-300' />
                <button type='submit'   className='bg-amber-300 p-2 rounded'>Add to do</button>

            </form>

        </div>
    )
}

export default NewTodo