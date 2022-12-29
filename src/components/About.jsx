import AboutMe from '../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
const About = () => {
  return (
    <section id='about' className=' text-center mt-32 '>
      <h5 className=''>Get To Know</h5>
      <h2 className='text-2xl mb-12 font-semibold text-blue-light'>About ME</h2>
      <div className='container grid grid-cols-1 lg:grid-cols-2 mt-4 mx-auto'>
        <div className=' flex justify-center my-10 '>
          <div className='w-3/5 aspect-square rounded-md bg-gradient-to-tr from-transparent to-blue-light'>
            <img
              className='rotate-12 aspect-square rounded-md hover:rotate-0 duration-500'
              src={AboutMe}
              alt='Me pic'
            />
          </div>
        </div>
        <div className='container'>
          <div className='grid grid-cols-3 gap-3 text-center px-2 mt-4'>
            <article className=' bg-blue-darkLight hover:scale-110 duration-500 rounded-3xl p-8 text-center flex flex-col items-center'>
              <FaAward size={24} className='mb-4 text-blue-light' />
              <h5>Experience</h5>
              <small>4+ Years</small>
            </article>
            <article className=' bg-blue-darkLight hover:scale-110 duration-500 rounded-3xl p-8 text-center flex flex-col items-center'>
              <FiUsers size={24} className='mb-4 text-blue-light' />
              <h5>Client</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className=' bg-blue-darkLight hover:scale-110 duration-500 rounded-3xl p-8 text-center flex flex-col items-center'>
              <VscFolderLibrary size={24} className='mb-4 text-blue-light' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <div className='flex flex-col items-center lg:items-start'>
            <p className='m-4 lg:text-start'>
              I'm a fullstack web developer with 4 years of experience and a
              passion for creating powerful, user-friendly web applications. My
              skillset includes JavaScript, React, Node, HTML, CSS, and JavaScript. I'm
              always striving to learn new technologies and stay up-to-date with
              the latest trends. I'm a fast learner and I believe in creating
              clean, maintainable code.
            </p>
            <a
              className='duration-500 hover:bg-transparent w-1/3 bg-blue-light border border-blue-light rounded-lg px-5 py-3 m-4'
              href='#contact'
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
