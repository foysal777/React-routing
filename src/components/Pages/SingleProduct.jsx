import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({ product }) => {
    console.log(product)
    const { id, image, category, price } = product

    return (
        <div  >

            <div className="flex  gap-6 p-6">
                <div className="border border-gray-300 rounded-2xl shadow-lg p-4 bg-white w-80 h-96 flex flex-col justify-between items-center">
                    <h1 className="text-lg font-semibold">{id}</h1>
                    <p className="text-gray-500">{category}</p>
                    <img
                        src={image}
                        alt="not found"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    <h1 className="text-xl font-bold text-gray-800">${price}</h1>

                    <Link to={`/product/${product.id}`} > <button className='border bg-sky-600 p-2 text-yellow-50'>More info </button> </Link>
                </div>
               
            
            </div>



        </div>
    )
}

export default SingleProduct