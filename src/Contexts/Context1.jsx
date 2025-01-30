import { createContext, useState } from "react";
import React from 'react'

export const Context1 =  createContext();

const ContextFun = ({children}) => {

    const [a, setA] = useState("hello ,. im context")
  return (
    <div>
         <Context1.Provider value={[a,setA]}>

           {children}
         </Context1.Provider>

    </div>
  )
}

export default ContextFun