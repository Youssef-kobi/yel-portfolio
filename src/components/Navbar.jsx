import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Navbar = () => {
  const [active, setActive] = useState('#home');
  return (
    <nav className='container rounded-full bg-black-faded backdrop-blur-sm w-max px-7 py-3 z-10 fixed left-1/2 -translate-x-1/2 flex bottom-8 gap-3 '>
      <a
        className={` hover:text-white  hover:scale-110 duration-500 p-4 rounded-full  hover:bg-black-faded ${
          active === '#home'
            ? 'bg-blue-light text-white'
            : 'bg-transparent text-blue-light'
        }`}
        href='#home'
        onClick={() => setActive('#home')}
      >
        <AiOutlineHome size={24} />
      </a>
      <a
        className={` hover:text-white  hover:scale-110 duration-500 p-4 rounded-full  hover:bg-black-faded ${
          active === '#about'
            ? 'bg-blue-light text-white'
            : 'bg-transparent text-blue-light'
        }`}
        href='#about'
        onClick={() => setActive('#about')}
      >
        <AiOutlineUser size={24} />
      </a>
      <a
        className={` hover:text-white  hover:scale-110 duration-500 p-4 rounded-full  hover:bg-black-faded ${
          active === '#experience'
            ? 'bg-blue-light text-white'
            : 'bg-transparent text-blue-light'
        }`}
        href='#experience'
        onClick={() => setActive('#experience')}
      >
        <BiBook size={24} />
      </a>
      <a
        className={`hover:text-white  hover:scale-110 duration-500 p-4 rounded-full  hover:bg-black-faded ${
          active === '#services'
            ? 'bg-blue-light text-white'
            : 'bg-transparent text-blue-light'
        }`}
        href='#services'
        onClick={() => setActive('#services')}
      >
        <RiServiceLine size={24} />
      </a>
      <a
        className={` hover:text-white  hover:scale-110 duration-500 p-4 rounded-full  hover:bg-black-faded ${
          active === '#contact'
            ? 'bg-blue-light text-white'
            : 'bg-transparent text-blue-light'
        }`}
        href='#contact'
        onClick={() => setActive('#contact')}
      >
        <BiMessageSquareDetail size={24} />
      </a>
    </nav>
  );
};

export default Navbar;
