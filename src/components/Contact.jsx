import { MdOutlineEmail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ie0gkbo',
        'template_0wf3elg',
        form.current,
        'P_bGv3zDRL1lBtLHR'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id='contact' className=' text-center mt-12 mt-32 '>
      <h5>Get In Touch</h5>
      <h2 className='text-2xl mb-12 font-semibold text-blue-light'>Contact Me</h2>
      <div className='container flex flex-col md:grid-cols-2 lg:flex-row items-center lg:items-start justify-center gap-8 mt-4 px-4 mx-auto'>
        <div className='flex flex-col gap-5 lg:w-1/4 w-full'>
          <article className=' text-center items-center bg-blue-darkLight pb-8 hover:bg-transparent hover:border border-transparent hover:border-blue-light duration-300 rounded-2xl p-8'>
            <MdOutlineEmail size={36} className='mx-auto  mb-4' />
            <h4 className='text-xl'>Email</h4>
            <h5 className='text-xs mb-4 '>youssefkobi@gmail.com</h5>
            <a
              className='text-xs text-blue-light'
              href='mailto:youssefkobi@gmail.com'
            >
              Send an Email
            </a>
          </article>
          <article className=' text-center items-center bg-blue-darkLight pb-8 hover:bg-transparent hover:border border-transparent hover:border-blue-light duration-300 rounded-2xl p-8'>
            <ImWhatsapp size={36} className='mx-auto  mb-4' />
            <h4 className='text-xl'>Whatsapp</h4>
            <h5 className='text-xs mb-4 '>+212603428160</h5>
            <a
              className='text-xs text-blue-light'
              rel='noreferrer'
              target='_blank'
              href='https://wa.me/+212603428160?text=hello'
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          className='flex flex-col gap-6 lg:w-2/4 w-full '
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            className='w-full p-6 rounded-lg border-2 bg-transparent border-blue-light'
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input
            className='w-full p-6 rounded-lg border-2 bg-transparent border-blue-light'
            type='email'
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea
            rows={7}
            className='w-full p-6 rounded-lg border-2 bg-transparent resize-none border-blue-light'
            name='message'
            placeholder='Your Message'
            required
          />
          <button
            className='w-1/4 duration-500 hover:bg-transparent bg-blue-light border border-blue-light text-gray-900 font-semibold hover:text-white rounded-lg px-5 py-3'
            type='submit'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
