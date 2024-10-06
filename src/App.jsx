import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import { useState } from 'react'
import ScrollButton from './Components/ScrollButton/ScrollButton'

function App() {

  const [showPopup , setshowPopup] = useState(false)


  return (
    <>
    {
      showPopup ? <LoginPopup  setshowPopup={setshowPopup}/> : <></>
    }
        <Navbar  setshowPopup={setshowPopup}  showPopup={showPopup}/>
    <div  className='app'>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/homePage' element={<Home/>} />
          <Route  path='*' element={""} />
          <Route  path='cart' element={<Cart/>} />
          <Route  path='/order' element={<PlaceOrder/>} />
        </Routes>
    </div>
    <Footer/>
    <ScrollButton/>
    </>
  )
}

export default App
