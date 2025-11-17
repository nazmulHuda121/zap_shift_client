import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import amazon from '../assets/brands/amazon.png';
import casio from '../assets/brands/casio.png';
import moonstar from '../assets/brands/moonstar.png';
import randstad from '../assets/brands/randstad.png';
import star from '../assets/brands/star.png';
import starpeople from '../assets/brands/start_people.png';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const brandLogos = [amazon, casio, moonstar, randstad, star, starpeople];

const Brands = () => {
  return (
    <div className="my-22">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {brandLogos.map((image, ind) => (
          <SwiperSlide key={ind}>
            <img src={image} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
