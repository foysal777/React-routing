import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Pages/Home'
const Navbar = () => {
  return (

    <div className='text-6xl bg-zinc-800 ' >
         <Link to={'/home'}> Home</Link>
        <Link to={'/service'}> Service </Link>
        <Link to={'/about'}>About</Link>


    </div>
  )
}

export default Navbar