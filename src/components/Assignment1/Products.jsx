import React from 'react'
import { useLocation } from "react-router-dom";
import Card from './Card';
import Assignment2 from '../Assignment2/Assignment2';


const Products = () => {
    const location = useLocation();
    const Mydata = location.state?.Mydata;
    console.log(Mydata.categories);

    return (
        <div >

                
            <h1 className='bg-teal-300 text-4xl p-8 text-center'>Assignment 2</h1>
            <Assignment2></Assignment2>
            <h1 className='bg-orange-300 text-4xl p-8 text-center'>Resturant Store</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {
                    Mydata.categories.map(item => <Card item={item} ></Card>)

                }
            </div>
        </div>
    )
}

export default Products

