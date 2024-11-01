import { useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import SectionHeader from './SectionHeader';

const testimonials = [
    {
        id: 1,
        text: "The woodwork delivered by Homevoila was meticulously designed and executed, perfectly reflecting our vision and enhancing our space's overall aesthetic.",
        name: "Raja Rajeswari Challa",
        location: "Bollarum, Secunderabad",
        image: profile1,
        rating: 5,
    },
    {
        id: 2,
        text: "Beautiful and high-quality craftsmanship! Homevoila exceeded our expectations in every way possible.",
        name: "Another Client",
        location: "Some Location",
        image: profile2,
        rating: 5,
    },
];

const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = testimonials.length;

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

    return (
        <div className="flex flex-col items-center justify-center p-4 w-[90vw]  m-auto">

            <SectionHeader mainHeading={"What Our Client Say "} subHeading={"About Us"} />
            <div className="w-full flex justify-between items-center bg-white  rounded-lg p-6 text-center">

                {/* Previous Arrow */}
                <button onClick={prevSlide} className=" transform -translate-x-8 flex items-center">
                    <FaArrowLeft className="ml-2 text-xl m-2 text-gray-500" />

                    <img src={testimonials[(current + length) % length].image} alt="Previous" className="w-20 h-20 rounded-full border" />
                </button>

                {/* Testimonial Content */}
                <div className="px-4 py-12 testimonical-card w-[50%]">
                    <div className="flex justify-center mb-2">
                        {[...Array(testimonials[current].rating)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                        ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonials[current].text}"</p>
                    <h3 className="font-semibold text-gray-900">{testimonials[current].name}</h3>
                    <p className="text-gray-500">({testimonials[current].location})</p>
                </div>

                {/* Next Arrow */}
                <button onClick={nextSlide} className=" transform translate-x-8 flex items-center">
                    <img src={testimonials[(current + 1) % length].image} alt="Next" className="w-20 h-20 rounded-full border " />
                    <FaArrowRight className="ml-2 text-xl m-2 text-gray-500" />

                </button>
            </div>
        </div>
    );
}
export default TestimonialSlider
