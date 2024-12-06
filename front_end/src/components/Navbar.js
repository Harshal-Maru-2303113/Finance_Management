import React from 'react'
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <nav className='navigation'>
        <div className='navigation_logo'>Miser</div>
        <div className='navigation_elements'>
            <div className='navigation_element_contact'>Contact</div>
            <div className='navigation_element_about'>About</div>
        </div>
        <div className='navigation_last'>
            <button className='navigation_login'>log in</button>
            <button className='navigation_signup'>sign up</button>
        </div>
    </nav>
  )
}
