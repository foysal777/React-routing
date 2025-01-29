import React, { createContext, useState } from 'react'
import Home from './Home';


export const CountContext = createContext();

const Service = () => {
  const [count, setCount] = useState(0);
  const Clicked = () => {
    const current = count + 1;
    setCount(current);
    console.log(current)
  }

  return (

    <div>

      <CountContext.Provider value = {count} > 

        <div className='text-center font-bold text-5xl pt-10'>
          <button onClick={Clicked} className='bg-green-500  border-2 px-6 py-3' > Count is : {count} </button>
          </div>
          <Home></Home>
      </CountContext.Provider>
  

    </div >
  )
}

export default Service