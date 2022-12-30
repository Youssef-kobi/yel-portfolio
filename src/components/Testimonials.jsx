import React from 'react';
import Avatar1 from '../assets/avatar1.jpg';
import Avatar2 from '../assets/avatar2.jpg';
import Avatar3 from '../assets/avatar3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials' className=' text-center pt-32'>
      <h5>Reviews from my clients</h5>
      <h2 className='text-2xl mb-12 font-semibold text-blue-light'>Testimonials</h2>
      <div className='container grid grid-cols-1  gap-8 mt-4 px-4 mx-auto'>
        <Swiper
         className='w-full lg:w-2/3'
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className='bg-blue-darkLight pb-8 hover:bg-transparent hover:border border-transparent hover:border-blue-light duration-300 rounded-2xl p-8'>
            <div className='aspect-square rounded-full border-8 m-auto overflow-hidden border-blue-light w-16'>
              <img src={Avatar1} alt='' />
            </div>
            <h5>Client Name</h5>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              assumenda error dignissimos voluptate veniam ea cum dolorum quia
              quo amet! Et, accusantium vel placeat fuga repellendus qui
              laboriosam repudiandae asperiores?
            </small>
          </SwiperSlide>

          <SwiperSlide className='bg-blue-darkLight hover:bg-transparent hover:border border-transparent hover:border-blue-light duration-300 rounded-2xl p-8'>
            <div className='aspect-square rounded-full border-8 m-auto overflow-hidden border-blue-light w-16'>
              <img src={Avatar2} alt='' />
            </div>
            <h5>Client Name</h5>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              assumenda error dignissimos voluptate veniam ea cum dolorum quia
              quo amet! Et, accusantium vel placeat fuga repellendus qui
              laboriosam repudiandae asperiores?
            </small>
          </SwiperSlide>

          <SwiperSlide className='bg-blue-darkLight hover:bg-transparent hover:border border-transparent hover:border-blue-light duration-300 rounded-2xl p-8'>
            <div className='aspect-square rounded-full border-8 m-auto overflow-hidden border-blue-light w-16'>
              <img src={Avatar3} alt='' />
            </div>
            <h5>Client Name</h5>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              assumenda error dignissimos voluptate veniam ea cum dolorum quia
              quo amet! Et, accusantium vel placeat fuga repellendus qui
              laboriosam repudiandae asperiores?
            </small>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
