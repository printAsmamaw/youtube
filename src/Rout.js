import React from 'react'
import './App.css';
import Recommended from './Recommended';
import Sidebar from './Sidebar';
function Rout() {
  return (
  
    <div className='home'>
      <Sidebar />
      <Recommended/>
      </div>

  )
}

export default Rout