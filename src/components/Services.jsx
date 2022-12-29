import React from 'react';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  const designServices = [
    'User Interface Design.',
    'User Experience Design.',
    'Prototyping.',
    'Interaction Design.',
    'Visual Design.',
    'Information Architecture.',
    'Usability Testing.',
    'User Research.',
    'Responsive Design.',
    'Accessibility Design.',
  ];
  const webDevServices = [
    'Front-End Development.',
    'Back-End Development.',
    'Database Design & Management',
    'E-commerce Solutions.',
    'Responsive Web Design.',
    'Content Management System (CMS) Integration.',
    'Custom Website Development.',
    'Search Engine Optimization (SEO).',
    'Mobile App Development.',
  ];
  const otherServices = [
    'Containerization using Docker.',
    'Figma.',
    'Logo creation using Canva',
    'Google sheets scripts',
    'Responsive Web Design.',
    'WordPress Editing.',
    'Shopify Editing',
    'Javascript Code Refactoring.',
    'Web Hosting & Maintenance.',
  ];
  return (
    <section id='services' className=' text-center mt-32'>
      <h5>What Offer ?</h5>
      <h2 className='text-2xl mb-12 font-semibold text-blue-light'>
        My Services
      </h2>
      <div className='container grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 px-4 mx-auto'>
        <div className='bg-blue-darkLight hover:bg-transparent hover:scale-105 duration-300 border rounded-t-md border-blue-light rounded-b-3xl flex flex-col '>
          <div className='bg-blue-light shadow-md text-gray-900 py-12 px-4 rounded-b-3xl rounded-t-md font-bold'>
            <h2>UI/UX Design</h2>
          </div>
          <ul className='px-8 py-12'>
            {designServices.map((item, index) => (
              <li key={index} className='flex gap-4 mb-3'>
                <BiCheck size={24} className='text-blue-light' />
                <p className='text-start'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='bg-blue-darkLight hover:bg-transparent hover:scale-105 duration-300 border rounded-t-md border-blue-light rounded-b-3xl flex flex-col '>
          <div className='bg-blue-light shadow-md text-gray-900 py-12 px-4 rounded-b-3xl rounded-t-md font-bold'>
            <h2>Web Development</h2>
          </div>
          <ul className='px-8 py-12'>
          {webDevServices.map((item, index) => (
              <li key={index} className='flex gap-4 mb-3'>
                <BiCheck size={24} className='text-blue-light' />
                <p className='text-start'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='bg-blue-darkLight hover:bg-transparent hover:scale-105 duration-300 border rounded-t-md border-blue-light rounded-b-3xl flex flex-col '>
          <div className='bg-blue-light shadow-md text-gray-900 py-12 px-4 rounded-b-3xl rounded-t-md font-bold'>
            <h2>Content creation</h2>
          </div>
          <ul className='px-8 py-12'>
          {otherServices.map((item, index) => (
              <li key={index} className='flex gap-4 mb-3'>
                <BiCheck size={24} className='text-blue-light' />
                <p className='text-start'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
