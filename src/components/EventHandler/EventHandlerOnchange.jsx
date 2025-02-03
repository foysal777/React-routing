import React, { useState } from 'react'

const EventHandlerOnchange = () => {

    const [text , SetText] = useState('');
    const handleChange=(e)=>{
        SetText(e.target.value);
        //  console.log(e.target.value)
    }

    return (

        
        <div className='flex justify-center items-center pt-24'>

            <input type='text' value={text} className='border rounded p-2' placeholder='Type msg' onChange={handleChange} />
          <h2>Your typing is :  {text} </h2>
        </div>
    )

}
export default EventHandlerOnchange