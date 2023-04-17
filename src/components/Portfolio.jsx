import React from 'react';
import portfolio from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.jpg';
import portfolio5 from '../assets/portfolio5.png';
import portfolio6 from '../assets/portfolio6.jpg';
const Portfolio = () => {
  return (
    <section id='portfolio' className=' text-center pt-32 '>
      <h5>My Work?</h5>
      <h2 className='text-2xl mb-12 font-semibold text-blue-light'>
        here some of my projects
      </h2>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 px-4 mx-auto'>
        <article className='bg-blue-darkLight hover:bg-transparent duration-300 hover:border border-blue-light rounded-3xl flex flex-col p-10 '>
          <div className='rounded-lg flex-grow hover:scale-105 duration-300 overflow-hidden'>
            <img
              src={portfolio}
              alt='Firebase Auth boilerplate'
              className='w-full h-full'
            />
          </div>
          <h5 className='text-start my-4'>React Firebase Boilerplate</h5>
          <div className='flex gap-4'>
            <a
              className='duration-500 hover:bg-transparent hover:bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/Youssef-kobi/Firebase-Auth-Template'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              className='duration-500 hover:bg-transparent bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://yel-firebase-auth.vercel.app'
              target='_blank'
              rel='noreferrer'
            >
              View Demo
            </a>
          </div>
        </article>
        <article className='bg-blue-darkLight hover:bg-transparent duration-300 hover:border border-blue-light rounded-3xl flex flex-col p-10 '>
          <div className='rounded-lg hover:scale-105 duration-300 overflow-hidden'>
            <img src={portfolio2} alt='' />
          </div>
          <h5 className='text-start my-4'>Project Name</h5>
          <div className='flex gap-4'>
            <a
              className='duration-500 hover:bg-transparent hover:bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/youssef-kobi'
            >
              Github
            </a>
            <a
              className='duration-500 hover:bg-transparent bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/youssef-kobi'
            >
              View Demo
            </a>
          </div>
        </article>
        <article className='bg-blue-darkLight hover:bg-transparent duration-300 hover:border border-blue-light rounded-3xl flex flex-col p-10 '>
          <div className='rounded-lg hover:scale-105 duration-300 overflow-hidden'>
            <img src={portfolio3} alt='' />
          </div>
          <h5 className='text-start my-4'>Project Name</h5>
          <div className='flex gap-4'>
            <a
              className='duration-500 hover:bg-transparent hover:bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/youssef-kobi'
            >
              Github
            </a>
            <a
              className='duration-500 hover:bg-transparent bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/youssef-kobi'
            >
              View Demo
            </a>
          </div>
        </article>
        <article className='bg-blue-darkLight hover:bg-transparent duration-300 hover:border border-blue-light rounded-3xl flex flex-col p-10 '>
          <div className='rounded-lg hover:scale-105 duration-300 overflow-hidden'>
            <img src={portfolio4} alt='' />
          </div>
          <h5 className='text-start my-4'>Project Name</h5>
          <div className='flex gap-4'>
            <a
              className='duration-500 hover:bg-transparent hover:bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/youssef-kobi'
            >
              Github
            </a>
            <a
              className='duration-500 hover:bg-transparent bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/youssef-kobi'
            >
              View Demo
            </a>
          </div>
        </article>
        <article className='bg-blue-darkLight hover:bg-transparent duration-300 hover:border border-blue-light rounded-3xl flex flex-col p-10 '>
          <div className='rounded-lg hover:scale-105 duration-300 overflow-hidden'>
            <img src={portfolio5} alt='' />
          </div>
          <h5 className='text-start my-4'>Project Name</h5>
          <div className='flex gap-4'>
            <a
              className='duration-500 hover:bg-transparent hover:bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/youssef-kobi'
            >
              Github
            </a>
            <a
              className='duration-500 hover:bg-transparent bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/youssef-kobi'
            >
              View Demo
            </a>
          </div>
        </article>
        <article className='bg-blue-darkLight hover:bg-transparent duration-300 hover:border border-blue-light rounded-3xl flex flex-col p-10 '>
          <div className='rounded-lg hover:scale-105 duration-300 overflow-hidden'>
            <img src={portfolio6} alt='' />
          </div>
          <h5 className='text-start my-4'>Project Name</h5>
          <div className='flex gap-4'>
            <a
              className='duration-500 hover:bg-transparent hover:bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/youssef-kobi'
            >
              Github
            </a>
            <a
              className='duration-500 hover:bg-transparent bg-blue-light border border-blue-light rounded-lg px-5 py-3'
              href='https://github.com/youssef-kobi'
            >
              View Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
