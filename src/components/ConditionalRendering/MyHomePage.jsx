import React from 'react'

const MyHomePage = ({value}) => {
  return (

    <div>

        <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-green-600">🏡 Welcome to Homepage!</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
          onClick={value}
        >
         Logout 
        </button>
      </div>

  
  
  </div>
  )
}

export default MyHomePage