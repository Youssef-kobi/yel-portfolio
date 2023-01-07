import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
ReactGA.initialize('UA-253343391-1');
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  useEffect(() => {
    ReactGA.initialize('yourTrackingCode');
    ReactGA.pageview(window.location.pathname);
    ReactGA.event({
      category: 'First Visit',
      action: 'Triggered',
      label: 'Homepage',
      value: 1,
    });
  }, []);
  return (
    <div className='font-medium font-Poppins leading-7 text-white'>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
