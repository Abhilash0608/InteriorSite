import './App.css';
import Aboutus from './components/AboutUs';
import CustomCursor from './components/CustomMouse';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import Slider from './components/Slider';
import TestimonialSlider from './components/Testimonails';

function App() {
  return (
    <div className="app flex flex-col  m-auto'">
      <CustomCursor/>
      <Navbar/>
      <Hero/>
      <Slider/>
      <OurServices/>
      <Aboutus/>
      <TestimonialSlider/>

    </div>
  );
}

export default App;
