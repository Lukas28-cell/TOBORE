import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navitems from './Component/Navitems'
import Footer from './Component/Footer'
// import SelectedCategory from './Component/SelectedCategory'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Navitems/>
    <div className=' min-vh-100'>
    <Outlet/>

    </div>
    <Footer/>
    
    </>
     
  )
}

export default App
