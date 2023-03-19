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
import BrandAmbassador from './page/hiring/career/thai-career/BrandAmbassador';
import JuniorGrapDes from './page/hiring/career/thai-career/JuniorGrapDes';
import VideoEditor from './page/hiring/career/thai-career/VideoEditor';
import VideoGrapher from './page/hiring/career/thai-career/VideoGrapher';

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

          {/*ThatGood4U Career */}
          <Route path='brand-ambassador' element={<BrandAmbassador/>}/>
          <Route path='junior-graphic-designer' element={<JuniorGrapDes/>}/>
          <Route path='video-editor' element={<VideoEditor/>}/>
          <Route path='video-grapher' element={<VideoGrapher/>}/>
        </Route>

      </Routes>
      
      <Footer/>
    </div>
    </>
  )
}

export default App
