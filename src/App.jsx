import React from 'react'
import Footer from './components/Footer'
import Home from './page/homepage/Home'
import Hiring from './page/hiring/';

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hiring' element={<Hiring/>} />
      </Routes>
      
      <Footer/>
    </div>
    </>
  )
}

export default App
