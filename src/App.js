import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import Properties from './pages/Properties'
import Services from './pages/Services'
import './index.css'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>
    </>
  )
}

export default App
