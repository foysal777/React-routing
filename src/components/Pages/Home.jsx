import React, { useContext } from 'react'
import { CountContext } from './Service'

const Home = () => {

 const fetchContext = useContext(CountContext)

  return (
    <div>
      
     <h1 className='text-center text-6xl text-blue-700 p-16'>Welcome to Homepage in React </h1>
      
      <h1 className='text-center text-sky-800'>Your Fetching count is : {fetchContext} </h1>
      </div>
  )
}

export default Home