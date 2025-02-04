import React, { useState } from 'react'

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  
  });
  const handleChange = (e) => {
  
    setFormData({...formData, [e.target.name]: e.target.value });
  
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered Data:", formData);
    alert("Registration Successful!");
  };
  



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <label className="block mb-2 text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          required
        />

        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
          required
        />

        <label className="block mb-2 text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Form