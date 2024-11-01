import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import image2 from '../assets/image2.jpg'
export default function Slider() {
    return (
        <div className='max-w-[90vw] m-auto'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={image2} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="image1" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
