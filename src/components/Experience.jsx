import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  const frontEndSkills = [
    {
      name: 'HTML5',
      level: 'experienced',
    },
    {
      name: 'CSS3',
      level: 'experienced',
    },
    {
      name: 'JavaScript',
      level: 'experienced',
    },
    {
      name: 'ReactJs',
      level: 'experienced',
    },
    {
      name: 'NextJS',
      level: 'experienced',
    },
    {
      name: 'TailwindCss',
      level: 'experienced',
    },
    {
      name: 'Material Ui',
      level: 'experienced',
    },
    {
      name: 'VueJs',
      level: 'experienced',
    },
  ];
  const backEndSkills = [
    {
      name: 'NodeJS',
      level: 'experienced',
    },
    {
      name: 'Express',
      level: 'experienced',
    },
    {
      name: 'MongoDb',
      level: 'experienced',
    },
    {
      name: 'MySQL',
      level: 'experienced',
    },
    {
      name: 'Firebase',
      level: 'experienced',
    },
    {
      name: 'Sanity',
      level: 'experienced',
    },
    {
      name: 'PHP',
      level: 'experienced',
    },
  ];
  return (
    <section id='experience' className=' text-center mt-32 '>
      <h5>What Skills I Have ?</h5>
      <h2 className='text-2xl mb-12 font-semibold text-blue-light'>
        My Experiences
      </h2>
      <div className='container grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 px-4 mx-auto'>
        <div className='bg-blue-darkLight hover:bg-transparent hover:scale-105 duration-300 hover:border border-blue-light rounded-3xl flex flex-col py-10 px-20 '>
          <h4>Front-End</h4>
          <div className='flex flex-wrap mt-4'>
            {frontEndSkills.map((item, index) => (
              <article key={index} className='w-1/2 flex justify-center'>
                <BsPatchCheckFill className='fill-blue-light mt-1.5' />
                <div className='text-start ml-4'>
                  <h4>{item.name}</h4>
                  <small className='text-gray-400'>{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className='bg-blue-darkLight hover:bg-transparent hover:scale-105 duration-300 hover:border border-blue-light rounded-3xl flex flex-col py-10 px-20 2.4rem 5rem'>
          <h4>Back-End</h4>
          <div className='flex flex-wrap mt-4'>
          {backEndSkills.map((item, index) => (
              <article key={index} className='w-1/2 flex justify-center'>
                <BsPatchCheckFill className='fill-blue-light mt-1.5' />
                <div className='text-start ml-4'>
                  <h4>{item.name}</h4>
                  <small className='text-gray-400'>{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
