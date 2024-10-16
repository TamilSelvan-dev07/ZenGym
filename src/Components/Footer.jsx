import React from 'react'
import './Styles/Footer.css'
import image1 from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (

    <div className='footer-container'>
      
      <div className="item1">

      <div className="logo-container">
        <img src={image1} />
      </div>

      <div className="quick-links">
         <h3>Social media Links</h3>
        <ul>
            <li><FaInstagram className='icon2'/><a href="https://www.instagram.com/tamil_mass_07?igsh=YzhscGJ6d2hnMDN0" target='_blank'>Instagram</a></li>
            <li><FaFacebook className='icon2'/><a href="https://www.facebook.com/profile.php?id=100027093723260&mibextid=ZbWKwL" target='_blank'>Facebook</a></li>
            <li><FaXTwitter className='icon2'/><a href="https://x.com/nottherealcbum" target='_blank'>Twitter</a></li>            
            <li><FaYoutube className='icon2'/><a href="https://www.youtube.com/@ChrisBumstead" target='_blank'>Youtube</a></li>          

        </ul>
      </div>
      </div>

      <div className="item2">

        <p>&copy; 2024 ZenGYm. All Rights Reserved.</p>
      </div>


    </div>
  )
}

export default Footer