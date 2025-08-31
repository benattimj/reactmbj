import React from 'react'
import './about.css'
import ME from '../../assets/abm.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
       <section id='about'>
      <h5> Get To Know  </h5>
      <h2> About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

    <div className="about_content">
      <div className="about_cards">
       
      <article className='about_card'>
          <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small> 3+</small>
        </article>
     
        <article className='about_card'>
          <FiUsers className='about_icon'/>
          <h5>Clients</h5>
          <small> +20 Worldwide</small>
      </article>

      <article className='about_card'>
          <VscFolderActive className='about_icon'/>
          <h5>Projects</h5>
          <small> +35 Completed </small>
      </article>

        <p className='P'> Master of Responsive websites

        </p>

          <x>
        <a href ="https://api.whatsapp.com/send/?phone=5534999047919&text&type=phone_number&app_absent=0" className='btn btn-primary'> Let's Talk
        </a>
        </x>
      </div>
    </div>
</div>

     </section>
  )
}

export default About