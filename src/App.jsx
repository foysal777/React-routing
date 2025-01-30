
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Pages/Footer'
import ContextFun from './Contexts/Context1'


function App() {
  return (

    <div>
      <ContextFun>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </ContextFun>

    </div>
  )
}

export default App
