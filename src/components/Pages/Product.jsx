import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleProduct from './SingleProduct';

const Product = () => {
    const products = useLoaderData();
    console.log(products)

  return (
    <div>  
 {
          products.map(product => <SingleProduct product = {product} key={product.id} ></SingleProduct>)

  }
    </div>
  )
}

export default Product

