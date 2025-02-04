import React, { useContext } from 'react'
import { Context1 } from '../../Contexts/Context1'
import ConditionalRendering from '../ConditionalRendering/ConditionalRendering';
import EventHandlerOnchange from '../EventHandler/EventHandlerOnchange';
import Form  from '../Form/Form';


const About = () => {

  const [a, setA] = useContext(Context1);

  return (
    <div>  I am from About page
       <Form></Form>
       <ConditionalRendering></ConditionalRendering>
      <h1 className='text-center text-4xl text-black' >{a} </h1>
      <EventHandlerOnchange></EventHandlerOnchange>

    </div>
  )
}

export default About