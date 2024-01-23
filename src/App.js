import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import Properties from './pages/Properties'


const App = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/properties' element={<Properties />} />


      </Routes>
    </>
  )
}

export default App
