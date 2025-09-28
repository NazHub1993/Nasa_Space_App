
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Globe } from "@/components/ui/globe"
import ScrollSection from './components/ScrollSection'
import SearchDrawMap from "./components/SearchDrawMap";//map
import React from "react";


// Import your login and signup pages
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-gray-900 ">
        <Navbar />
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>

        {/* Globe stays at the bottom */}
        {/* <div className="relative bottom-0 right-0 top-60 pb-4 z-100 bg-gray-900">
          <Globe />
        </div> */}
      </div>

      {/* Scroll section stays outside the main screen */}
      {/* <ScrollSection /> */}
    </BrowserRouter>
  )
}

export default App




