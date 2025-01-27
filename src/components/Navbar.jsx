import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (

    <div className='text-6xl text-sky-100 bg-zinc-900 ' >

      <Link to={'/home'}> Home</Link>
      <Link to={'/service'}> Service </Link>
      <Link to={'/about'}>About</Link>


    </div>
  )
}

export default Navbar