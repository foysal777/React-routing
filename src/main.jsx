import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Service from './components/Pages/Service.jsx'
import ErrorPage from './components/Pages/ErrorPage.jsx'
import Product from './components/Pages/Product.jsx'
import MoreInfo from './components/Pages/MoreInfo.jsx'

const router = createBrowserRouter([
 {
   path : '/',
   element :<App></App>,
   errorElement : <ErrorPage></ErrorPage>,

   children : [

    {
      path : '/home' ,
      element : <Home></Home>
    },
    {

      path : '/about',
      element : <About></About>
    },
    {
      path : '/service',
      element : <Service></Service>
    },
    {
     path : '/product' ,
     loader : () => fetch('https://fakestoreapi.com/products'),
     element : <Product></Product>

    },
    {
         path : '/product/:productId',
         loader : ({params}) => fetch(`https://fakestoreapi.com/products/${params.productId}`),
         element : <MoreInfo></MoreInfo>

    }
  ]
 },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} ></RouterProvider>
  </StrictMode>,
)
