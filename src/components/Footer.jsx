import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
const Footer = () => {
  return (
    <footer className='bg-blue-light py-12 text-sm mt-32'>
      <div className='text-center mb-12'>
        <a className='font-semibold text-center font-DM text-9xl text-blue-dark' href='/'>
          Y
        </a>
      </div>
      <ul className='text-blue-dark flex  flex-col items-center lg:flex-wrap  justify-center gap-4 mb-16'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='flex justify-center gap-4 mb-16'>
        <a
          className='hover:bg-transparent text-white  bg-blue-dark rounded-xl p-2 flex duration-500'
          href='https://linkedin.com/in/youssef-elkobi'
        >
          <FaLinkedinIn size={24} />
        </a>
        {/* <a
          className='text-blue-dark hover:text-white  hover:scale-110 duration-500'
          href='https://github.com/youssef-kobi'
        >
          <ImGithub size={24} />
        </a> */}
        <a
          className='hover:bg-transparent text-white  bg-blue-dark rounded-xl p-2 flex duration-500'
          href='https://linkedin.com/in/youssef-elkobi'
        >
          <IoLogoTwitter size={24} />
        </a>
      </div>
      <div className='text-center mb-16 text-blue-dark'>
        <small>&copy; Youssef ElKobi. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
