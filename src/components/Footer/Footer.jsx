import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer_logo'>Oladapo Ayomide</a>

        <ul className='footer_list'>
          <li><a href='#about' className='footer_link'>About</a></li>

          <li><a href='#experience' className='footer_link'>Experience</a></li>

          <li><a href='#testimonial' className='footer_link'>Testimonial</a></li>

          <li><a href='#services'className='footer_link'>Service</a>  </li>
        </ul>

      <div className='footer_copy'>
        <small> &copy; Oladapoayomide. All rights reserved.</small>
        </div>
  
    </footer>
  )
}

export default Footer