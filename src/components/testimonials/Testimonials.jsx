import React from 'react';
import "./testimonials.css";
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 
// Import required modules
import { Pagination } from 'swiper/modules';

export default function Testimonials() {
  
  const renderStars = (rating) => {
    const fullStars = Array(rating).fill("★"); 
    const emptyStars = Array(5 - rating).fill("☆"); 
    return [...fullStars, ...emptyStars].join(" "); 
  };

  return (
    <section className="testimonials container section" id='testimonial'>
      <h2 className='section__title'>My clients say</h2>
      <span className='section__subtitle'>Testimonials</span>
      <Swiper 
        className="testimonials__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        speed={600}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, rating }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt={title} className='testimonial__img'/>
              <h3 className='testimonial__name'>{title}</h3>
              <p className='testimonial__description'>{description}</p>
              <div className="testimonial__rating">
                <span className="testimonial__stars">{renderStars(rating)}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
