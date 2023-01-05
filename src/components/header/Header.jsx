import React from 'react'
import './header.css'
import CTA from './CTA'
import Mbj from '../../assets/Mbj.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1> Murilo Benatti Justino</h1>
      <h5 className="text-light"> Fullstack Developer</h5>
      <CTA/>
      <HeaderSocials/>


<div className= "me">
  <img src={Mbj} alt="me" />
      </div>

    <a href="#contact" className='scroll_down'> Scroll Down</a>
      </div>
    </header>
   
  )
}

export default Header