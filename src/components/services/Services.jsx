import React from 'react'
import './services.css'
import { FiCheck } from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5> What I offer</h5>
      <h2>Services</h2>


      <div className="container services_container">

        <article className="service">
          <div className="service_head">
            <h3> UI/UX Design</h3>
          </div>

         </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3> Web Development</h3>
          </div>
        </article>

        {/* WEB Development X */}

        <article className="service">
          <div className="service_head">
            <h3> Content Creation</h3>
          </div>

                  </article>


        {/* END Of Creation X */}
      </div>
    </section>
  )
}

export default Services