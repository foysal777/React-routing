import React from 'react'

const LoginPage = ({value}) => {
  return (
    <div><div className="text-center mt-20">
    <h1 className="text-3xl font-bold text-blue-600">🔐 Please log in </h1>
    <button
      className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md"
      onClick={value}
    >
     Log-in
    </button>
  </div></div>
  )
}

export default LoginPage