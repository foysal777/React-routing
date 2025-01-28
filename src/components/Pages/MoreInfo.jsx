import React from 'react'
import { useLoaderData } from 'react-router-dom'

const MoreInfo = () => {

  const info = useLoaderData();
  const {id, title , price} = info
  console.log(info);
  

  return (
    <div className='text-center font-bold text-4xl text-sky-400'>

        


            <h1> {id} </h1>
            <h1> {title} </h1>
            <h1> {price} </h1>
         

    </div>
  )
}

export default MoreInfo