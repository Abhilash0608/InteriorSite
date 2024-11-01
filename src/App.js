import './App.css';
import Aboutus from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CustomCursor from './components/CustomMouse';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import Slider from './components/Slider';
import TestimonialSlider from './components/Testimonails';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
function App() {
  return (
    <div className="app flex flex-col  m-auto">

      <CustomCursor/>
      <Navbar/>
      <Hero/>
      <Slider/>
      <OurServices/>
      <Aboutus/>
      <TestimonialSlider/>
    <ContactUs/>
    <div className='whatsapp-icon'>
    <FaWhatsapp size={60} className="   text-white" />

      </div>


    </div>
  );
}

export default App;
