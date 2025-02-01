// import React from 'react'

// const Card = ({ item }) => {

//     const { strCategoryDescription, strCategoryThumb, strCategory } = item
//     console.log(item);
//     return (
//         <div>
//             <div  >
//                 <img className="w-full h-40 object-cover rounded-md" src={strCategoryThumb} alt="" />
//                 <h5 className="text-xl font-bold mt-2">{item.strCategory}</h5>
//                 <p> {strCategoryDescription} </p>
//             </div>


//         </div>
//     )
// }

// export default Card


import React from 'react';

const Card = ({ item }) => {
  const { strCategoryDescription, strCategoryThumb, strCategory } = item;

  return (
    <div className=" max-w-md p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        className="w-full h-40 object-cover rounded-md"
        src={strCategoryThumb}
        alt={strCategory}
      />

      {/* Category Title */}
      <h5 className="text-xl font-bold mt-3 text-center text-orange-300">{strCategory}</h5>

      {/* Description */}
      <p className="text-black text-sm mt-2 line-clamp-3 text-center">
        {strCategoryDescription}
      </p>
    </div>
  );
};

export default Card;
