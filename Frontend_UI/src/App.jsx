import React from 'react'
import Home from './components/Home/Home'
import './index.css'
import MainUI from './components/Bug-finder-UI/MainUI'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MainUI" element={<MainUI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App