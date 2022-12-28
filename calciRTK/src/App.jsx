import React from 'react'
import { Route, Routes } from 'react-router-dom'
import First from './pages/First'
import Second from './pages/Second'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<First />} />
      <Route path='/second' element={<Second />} />
    </Routes>
  )
}

export default App
