import React from 'react'
import './App.css';
import Navbar from './Navbar/Navbar'
import Features from './Features/Features'

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <Navbar></Navbar>
        <h1 className="Header-title">راه حل های قدرتمند <br /> دیجیتال با <br /> <span>Kasuka</span></h1>
        <h4 className='Header-subtitle'>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h4>
        <div className='Features-container'>
          <Features></Features>
          <Features></Features>
          <Features></Features>
          <Features></Features>
        </div>
      </div>
    </div>
  );
}

export default App;
