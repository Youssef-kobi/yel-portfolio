import React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';
import MyPicture from '../assets/me.png';

const Header = () => {
  return (
    <header className='container sm:h-screen md:h-[70vh] h-screen m-auto pt-28 overflow-hidden relative'>
      <div className=' flex flex-col items-center w-full '>
        <h5>Hello I'm</h5>
        <h1 className='text-4xl'>Youssef ElKobi</h1>
        <h5 className='font-light'>Fullstack Developer</h5>
        <div>
          <button className='duration-500 hover:bg-blue-light border  border-blue-light rounded-lg px-5 py-3 mr-4'>
            Download Cv
          </button>
          <button className='duration-500 hover:bg-transparent bg-blue-light border border-blue-light rounded-lg px-5 py-3'>
            lets Chat
          </button>
        </div>
        <div className=' bg-gradient-to-t from-transparent overflow-hidden to-blue-light w-96 h-[30rem] rounded-t-full p-4 mt-8'>
          <img src={MyPicture} alt='' />
        </div>
        <a
          href='#contact'
          className='hidden lg:block text-blue-light hover:text-white duration-500 text-sm font-light absolute rotate-90 bottom-20 -right-5 '
        >
          Scroll Down
        </a>
        <div className='hidden lg:flex flex-col items-center gap-3 absolute left-0 bottom-12  after:w-0.5 after:h-8 after:bg-blue-200'>
          <a
            className='text-blue-light hover:text-white duration-500'
            href='https://linkedin.com/in/youssef-elkobi'
          >
            <ImLinkedin size={24} />
          </a>
          <a
            className='text-blue-light hover:text-white duration-500'
            href='https://github.com/youssef-kobi'
          >
            <ImGithub size={24} />
          </a>
          <a
            className='text-blue-light hover:text-white duration-500'
            href='https://linkedin.com/in/youssef-elkobi'
          >
            <ImLinkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
