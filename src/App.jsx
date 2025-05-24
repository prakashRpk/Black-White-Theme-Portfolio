
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import loadingSound from './audio/1.mp3'

import Nav from './pages/Nav'
import Background from './pages/Backgound'
import Contact from './pages/Contact';
import Home from './pages/Home'
import Project from './pages/Projects'
import Skills from './pages/Skills'
import Academic from './pages/Academic'

import './App.css'
function App() {
    const audioRef = useRef(null);
    const [count,setCount]=useState(0)
    const [loadscreen,setLoadscreen]=useState(<div></div>)

      useEffect(() => {
    // Try playing audio on component mount
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.log('Autoplay prevented:', err);
      }
    };
    playAudio();
  }, []);

    useEffect(()=>{
        if(100 !== count){
setTimeout(() => {
        setCount(count+1)
        setLoadscreen(    
    <div className='loadScreen'>
        <ProgressBar animated variant="dark" now={count} /><b>{count}%</b>
    </div>)
        
    }, 50);
        } 
        if(count === 100){
                       setLoadscreen(    
    <div className='loadScreen-1'>
      <HashRouter>
      <Background/>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Academic" element={<Academic />} />
        </Routes>
        <Contact/>
      </HashRouter>

    </div>) 
        }
    },[count])



    return(<>
    <marquee behavior="" direction="" scrollamount="100" id="role" ><h1>loading... Please Wait</h1></marquee>
       <audio ref={audioRef} src={loadingSound} />

{loadscreen}
    </>)
}

export default App;
