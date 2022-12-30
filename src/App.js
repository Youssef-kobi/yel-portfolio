import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
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
