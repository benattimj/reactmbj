import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>   Download CV </a>
      <a href="https://api.whatsapp.com/send/?phone=5534991286927&text&type=phone_number&app_absent=0" classname='btn'> Let's talk </a>

    </div>
  )
}

export default CTA