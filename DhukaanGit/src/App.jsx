import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Hero from './pages/Hero'
import Jackets from './pages/Jackets'
import Journal from './pages/Journal'
import NewArrivals from './pages/NewArrivals'
import Product from './pages/Product'
import Trousers from './pages/Trousers'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/trousers' element={<Trousers />} />
        <Route path='jackets' element={<Jackets />} />
        <Route path='/NewArrivals' element={<NewArrivals />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App;
