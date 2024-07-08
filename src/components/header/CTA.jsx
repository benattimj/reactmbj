import React from 'react'
import TX from '../../assets/TX.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={TX} download>   Download CV </a>
      <a href="https://api.whatsapp.com/send/?phone=5534999047919&text&type=phone_number&app_absent=0" classname='btn'> Let's talk </a>

    </div>
  )
}

export default CTA