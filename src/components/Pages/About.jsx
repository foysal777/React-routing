import React, { useContext } from 'react'
import { Context1 } from '../../Contexts/Context1'
import ConditionalRendering from '../ConditionalRendering/ConditionalRendering';


const About = () => {

  const [a, setA] = useContext(Context1);

  return (
    <div>  I am from About page
       <ConditionalRendering></ConditionalRendering>
      <h1 className='text-center text-4xl text-black' >{a} </h1>

    </div>
  )
}

export default About