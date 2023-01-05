import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avtr1.png'
import AVTR2 from '../../assets/avtr2.png'
import AVTR3 from '../../assets/avtr3.jpg'
import AVTR4 from '../../assets/avtr4.jpg'



import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data = [
{
  avatar: AVTR1,
  name: 'Carlos Tow',
  review: 'Nice work The move follows a detailed project review that identified several opportunities to de-bottleneck the refinery and revamp'
},
{
  avatar: AVTR2,
  name: 'Willian Guilt',
  review: 'I spent to much time searching for something like you. Thanks for the support.'
},
{
  avatar: AVTR3,
  name: 'Serina Dechichi',
  review: ' Amazing functions, Its perfect nowadays have systems and applications done with sucessfull work hard'
},
{
  avatar: AVTR4,
  name: 'Gesse Borges',
review: 'Easy to use platform. Very good and fast support. Highly recommended.'
}


]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetwee={40}
      slidesPerView={1}
      pagination={{ clickable: true}} >
{
  data.map(({avatar,name,review, index}) => {
    return (
      <SwiperSlide key={index} className="testimonial">
    <div className='client_avatar'>
        <img src={avatar} alt="Avatar one"/>
    </div>
    <h5 className='client_name'> {name}</h5>
<small className='client_review' >{review}</small>
      </SwiperSlide>
    )
  })
}

      </Swiper>  
    </section>
  )
}

export default Testimonials