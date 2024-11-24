import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import AppProvider from '../context/AppProvider'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
function App() {
  return (
    <>
    {/* <AppProvider>
      
    </AppProvider> */}

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />

      <Route path="/About" element={<About />} />
    </Routes>



    </>
  )
}

export default App
