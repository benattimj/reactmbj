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

          <ul className='service_list'>
            <li>
              <FiCheck className='service_list-icon' />
              <p>The art of structure is in the beauties.</p>
            </li>
            <li>
              <FiCheck className='service_list-icon' />
              <p>Our inspiration is in the idea of the ​​innovating, of shining we need energy.</p>
            </li> <li>
              <FiCheck className='service_list-icon' />
              <p>Creating applications with the best visuals, real structures, absolute control.</p>
            </li>


          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3> Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <FiCheck className='service_list-icon' />
              <p> Systems of Products, Clients, Storage, Financials, sales </p>
            </li>
            <li>
              <FiCheck className='service_list-icon' />
              <p>The latest, most advanced and fastest technology on the market</p>
            </li> <li>
              <FiCheck className='service_list-icon' />
              <p> Support, update and renews on your application.</p>
            </li>
            <li>
              <FiCheck className='service_list-icon' />
              <p> The idea its not be limited</p>
            </li> <li>
              <FiCheck className='service_list-icon' />
              <p> Practical, easy to access, good reading and many sales</p>
            </li> <li>
              <FiCheck className='service_list-icon' />
              <p> Thats sounds perfect for you</p>
            </li>
          </ul>
        </article>

        {/* WEB Development X */}

        <article className="service">
          <div className="service_head">
            <h3> Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <FiCheck className='service_list-icon' />
              <p> Web Store systems</p>
            </li>
            <li>
              <FiCheck className='service_list-icon' />
              <p> Portfolio applications</p>
            </li> <li>
              <FiCheck className='service_list-icon' />
              <p> Control of products application</p>
            </li>
            <li>
              <FiCheck className='service_list-icon' />
              <p> Hotel Systems</p>
            </li> <li>
              <FiCheck className='service_list-icon' />
              <p> Financial control system</p>
            </li> <li>
              <FiCheck className='service_list-icon' />
              <p> E-commerce</p>
            </li>
          </ul>

        </article>


        {/* END Of Creation X */}
      </div>
    </section>
  )
}

export default Services