import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({Mydata}) => {

  console.log(Mydata);
  return (

    <div className="text-2xl text-sky-100 bg-zinc-100  justify-center items-center flex gap-8 p-4">
    <Link to="/home" className="hover:text-zinc-900 transition-colors">
      Home
    </Link>
    <Link to="/service" className="hover:text-sky-500 transition-colors">
      Service
    </Link>
    <Link to="/about" className="hover:text-sky-500 transition-colors">
      About
    </Link>
    <Link to="/product" className="hover:text-sky-500 transition-colors">
      Product
    </Link>

    <Link to="/assign" state={{ Mydata }} className="hover:text-sky-500 transition-colors">
        Assignment1
      </Link>
  </div>
  
  )
}

export default Navbar