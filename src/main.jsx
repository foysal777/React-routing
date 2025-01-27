import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Service from './components/Pages/Service.jsx'
import ErrorPage from './components/Pages/ErrorPage.jsx'

const router = createBrowserRouter([
 {
   path : '/',
   element :<App></App>,
   errorElement : <ErrorPage></ErrorPage>,

   Children : [

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
    }
  ]
 },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} ></RouterProvider>
  </StrictMode>,
)
