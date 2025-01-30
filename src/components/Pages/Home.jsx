import React, { useContext } from 'react'
import { CountContext } from './Service'
import { Context1 } from '../../Contexts/Context1';



const Home = () => {
 
const fetchContext = useContext(CountContext);

const [a,setA] = useContext(Context1);

  return (
    <div>

     <h1 className='text-center text-6xl text-blue-700 p-16'>Welcome to Homepage in React </h1> 
      <h1 className='text-center text-sky-800'>Your Fetching count is : {fetchContext} </h1>

    <h1 className='text-center text-4xl text-black' >{a} </h1>
      </div>
  )
}

export default Home