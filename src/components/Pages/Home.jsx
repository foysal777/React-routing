import React, { useContext } from 'react'
import { CountContext } from './Service'
import { Context1 } from '../../Contexts/Context1';
import { FaFacebookMessenger } from "react-icons/fa";


const Home = () => {
 
const fetchContext = useContext(CountContext);

const [a,setA] = useContext(Context1);

const DateVar = new Date();
const year = DateVar.getFullYear();
  return (
    <div>
      <div className='flex items-center justify-center pt-16 text-8xl text-blue-700'> 
       <FaFacebookMessenger />
       
       </div>
       <h1> The present year is : {year} </h1>
     <h1 className='text-center text-6xl text-blue-700 p-16'>Welcome to Homepage in React </h1> 
      <h1 className='text-center text-sky-800'>Your Fetching count is : {fetchContext} </h1>

    <h1 className='text-center text-4xl text-black' >{a} </h1>
      </div>
  )
}

export default Home