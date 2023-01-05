import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className= 'header_socials'>
        <a href="https://www.linkedin.com/in/murilo-justinob/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/benattimj" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials