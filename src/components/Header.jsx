import React from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { ImGithub, ImLinkedin } from 'react-icons/im';
import ModelThee from './Model3D';
// import MyPicture from '../assets/me.png';

import ReactGA from 'react-ga';
const Header = () => {
  return (
    <header
      id='home'
      className='container h-screen m-auto pt-28 overflow-hidden relative'
    >
      <div className=' flex flex-col items-center w-full '>
        <div className=' flex flex-col items-center w-full pb-8 '>
          <h5>Hello I'm</h5>
          <h1 className='text-4xl'>Youssef ElKobi</h1>
          <h5 className='font-light'>Fullstack Developer</h5>
        </div>
        <div>
          <button className='duration-500 hover:bg-blue-light border  border-blue-light rounded-lg px-5 py-3 mr-4'>
            Download Cv
          </button>
          <a
            href='#contact'
            onClick={() =>
              ReactGA.event({
                category: 'button',
                action: 'Clicked',
                label: 'Header Lets Chat',
                value: 1,
              })
            }
            className='duration-500 hover:bg-transparent bg-blue-light border border-blue-light rounded-lg px-5 py-3'
          >
            lets Chat
          </a>
        </div>
        <div className=' bg-gradient-to-bl from-transparent h-[80vh] lg:w-3/6 md:w-4/6 w-5/6 overflow-hidden to-blue-light rounded-t-full my-8'>
          {/* <img src={MyPicture} alt='' /> */}
          <div className='bottom-52 right-10 absolute bg-black-faded  z-20  rounded-3xl flex flex-col items-center lg:hidden justify-center'>
            <a
              href='#home'
              className=' text-white rounded-full p-2 hover:bg-black-faded '
            >
              <AiOutlineCaretUp size={24} />
            </a>
            <a
              href='#about'
              className=' p-2 text-white  rounded-full hover:bg-black-faded'
            >
              <AiOutlineCaretDown size={24} />
            </a>
          </div>
          <ModelThee />
        </div>
        <div className=' animate-bounce absolute  bottom-20 -right-5 '>
          <a
            href='#contact'
            onClick={() =>
              ReactGA.event({
                category: 'button',
                action: 'Clicked',
                label: 'Header right Scroll',
                value: 1,
              })
            }
            className='hidden lg:block text-blue-light hover:text-white transform rotate-90 duration-500 text-sm font-light '
          >
            Scroll Down
          </a>
        </div>
        <div className='hidden ml-4 lg:flex flex-col items-center gap-3 absolute left-0 bottom-12  after:w-0.5 after:h-8 after:bg-blue-200'>
          <a
            onClick={() =>
              ReactGA.event({
                category: 'Link',
                action: 'Clicked',
                label: 'Header LinkedIn',
                value: 1,
              })
            }
            className='text-blue-light hover:text-white  hover:scale-110 duration-500'
            href='https://linkedin.com/in/youssef-elkobi'
          >
            <ImLinkedin size={24} />
          </a>
          <a
            onClick={() =>
              ReactGA.event({
                category: 'Link',
                action: 'Clicked',
                label: 'Header Github',
                value: 1,
              })
            }
            className='text-blue-light hover:text-white  hover:scale-110 duration-500'
            href='https://github.com/youssef-kobi'
          >
            <ImGithub size={24} />
          </a>
          <a
            onClick={() =>
              ReactGA.event({
                category: 'Link',
                action: 'Clicked',
                label: 'Fiverr',
                value: 1,
              })
            }
            className='text-blue-light hover:text-white hover:scale-110 duration-500'
            href='https://fiverr.com/youssefelkobi'
          >
            <svg
              // fill=''
              className='fill-blue-light hover:fill-white'
              width='24px'
              height='24px'
              viewBox='0 0 24 24'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M13.639,11.928h-0.954c0.06-0.258,0.216-0.492,0.534-0.492C13.465,11.436,13.639,11.664,13.639,11.928z M24.001,12 c0,6.627-5.373,12-12,12s-12-5.373-12-12s5.373-12,12-12S24.001,5.373,24.001,12z M6.217,9.78c0,0.298,0.242,0.54,0.54,0.54 c0.298,0,0.54-0.242,0.54-0.54s-0.242-0.54-0.54-0.54C6.459,9.24,6.217,9.482,6.217,9.78z M7.735,13.2h-0.42v-2.526H4.849v-0.162 c0-0.318,0.318-0.324,0.48-0.324c0.186,0,0.27,0.018,0.27,0.018V9.33c0,0-0.168-0.024-0.396-0.024c-0.516,0-1.47,0.144-1.47,1.236 v0.138h-0.45v0.81h0.45v1.71h-0.42v0.81h2.028V13.2H4.849v-1.71h1.35v1.71h-0.42v0.81h1.956V13.2z M11.149,11.484h0.372v-0.81 h-1.77v0.81h0.3l-0.384,1.2c-0.072,0.198-0.09,0.438-0.09,0.438H9.553c0,0-0.018-0.24-0.09-0.438l-0.384-1.2h0.3v-0.81h-1.77v0.81 h0.372l0.924,2.52h1.32L11.149,11.484z M14.797,12.204c0-0.924-0.558-1.608-1.548-1.608c-1.074,0-1.734,0.762-1.734,1.74 c0,0.888,0.642,1.746,1.83,1.746c0.9,0,1.434-0.468,1.434-0.468l-0.408-0.774c0,0-0.444,0.318-0.936,0.318 c-0.354,0-0.69-0.186-0.774-0.612h2.112C14.767,12.54,14.797,12.312,14.797,12.204L14.797,12.204z M17.773,10.632 c0,0-0.066-0.012-0.132-0.012c-0.51-0.006-0.93,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1 c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486 c0-0.606,0.3-1.002,0.918-1.002c0.138,0,0.228,0.018,0.228,0.018V10.632z M20.731,11.73v-1.098c0,0-0.066-0.012-0.132-0.012 c-0.504-0.006-0.924,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81 h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486c0-0.606,0.3-1.002,0.918-1.002 C20.641,11.712,20.731,11.73,20.731,11.73z' />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
