import React from 'react'
import Footer from './components/Footer'
import Home from './page/homepage/Home'
import Hiring from './page/hiring/';

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Internship from './page/hiring/career/Internship';
import DiAcc from './page/hiring/career/DiAcc';
import DiArt from './page/hiring/career/DiArt';
import DiMed from './page/hiring/career/DiMed';
import DiPro from './page/hiring/career/DiPro';
import DiWri from './page/hiring/career/DiWri';

function App() {
  return (
    <>
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/career'> 
          <Route index element={<Hiring/>} />
          <Route path='internship' element={<Internship/>} />
          <Route path='digital-account-executive' element={<DiAcc/>} />
          <Route path='digital-project-executive' element={<DiPro/>} />
          <Route path='digital-media-planner' element={<DiMed/>} />
          <Route path='digital-content-writer' element={<DiWri/>} />
          <Route path='digital-designer' element={<DiArt/>} />
        </Route>

      </Routes>
      
      <Footer/>
    </div>
    </>
  )
}

export default App
