"use client";

import React from 'react';
import './new_design.css'

export default function NewDesign() {
  return (
    <>
<input id="switch" type="checkbox"/>
<div className="app">
  <div className="body">
    
    <div className="phone">
    
      <div className="menu">
        <div className="time">4:20</div>
        <div className="icons">
          <div className="network"></div>
          <div className="battery"></div>
        </div>
      </div>
    
      <div className="content">
        <div className="circle">
          <div className="crescent"></div>
        </div>
       
        <label htmlFor="switch">
          <div className="toggle-mb"></div>
          <div className="names">
            <p className="light">Light</p>
            <p className="dark">Dark</p>
          </div>
        </label>
        
       
      </div>
      
    </div>
  </div>
  
</div>
</>
  )
}
