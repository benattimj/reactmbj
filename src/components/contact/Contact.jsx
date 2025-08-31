import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerFill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Mee</h2>

      <div className="container contact_container">
        <div className='contact_options'>

          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>benatti1104@gmail.com</h5>
            <a href="mailto:benatti1104@gmail.com"> Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerFill className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Murilo Services</h5>
            <a href="https://m.me/murilo.benattig.980" target="_blank" rel="noopener noreferrer"> Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>Murilo Contact</h5>
            <a href="https://api.whatsapp.com/send/?phone=5534999047919&text&type=phone_number&app_absent=0" classname='btn btn-prymary'> Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact