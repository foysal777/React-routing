import React, { useState } from 'react'

const Assignment2 = () => {
    const [count , SetCount] = useState(0);
   
    const EnableButton=()=>{
  
            SetCount(preCount =>preCount +1);
        
    }
 
  const DisableButton=()=>{
    SetCount(preCount => preCount -1 );
  }

  const Reset=()=>{
    SetCount(preCount => preCount * 0 );
  }

    return (
        <div>
            <h1 className='flex justify-center items-center text-2xl'>Counter App</h1>
            <div  className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className='text-4xl'>Count : {count} </h1> <br />
                <div className='flex gap-x-2'>
                     <button onClick={EnableButton} disabled={count === 5} className={`${count === 5 ? "bg-zinc-900 rounded-2xl p-2" : "bg-green-600 rounded p-2" } `}>Increase</button>                   
                   
                    <button onClick={DisableButton} disabled={count === -5} className={`${count === -5 ? "bg-red-500 cursor-not-allowed p-10 text-white  rounded-lg shadow-md hover:bg-red-600 transition" : "bg-amber-300"}`} >Decrease</button>
                    <button onClick={Reset} className="bg-rose-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">Reset</button>  
                </div>
            </div>

        </div>
    )
}

export default Assignment2