import React, { useState } from 'react'
import './Styles/Navbar.css'
import Hamburger from 'hamburger-react'
import images from '../assets/Logo.png'

const Navbar = () => {


  const [open,setOpen]= useState(false);


  const toggleMenu = ()=>{

    setOpen(!open)
  }



  return (

        <nav className='nav-container'>
            <div className='logo'>
                <img src={images} />
            </div>

            <div className='links'>
              <ul>
                <li><a href="#Program">Programs</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Plan">Plans</a></li>
                <li><a href="#Contact">Contact</a></li>
                
              </ul>
        
            </div>
            <div className="hamburger-menu">
               
              <div className="nav-icon" onClick={toggleMenu}><Hamburger  color='#FAA613' size={30} rounded /></div>

              <div className={`side-nav ${open?"show-nav":""}`}>
               
              <ul>
                <li><a href="#Program">Programs</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Plan">Plans</a></li>
                <li><a href="#Contact">Contact</a></li>
                
              </ul>
                
              </div>
    
               </div>   
        </nav>
  )
}

export default Navbar