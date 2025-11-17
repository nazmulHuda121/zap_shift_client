import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../assets/banner/banner1.png';
import banner2 from '../../assets/banner/banner2.png';
import banner3 from '../../assets/banner/banner3.png';

const Banner = () => {
  return (
    <div className="mt-12">
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div className="relative">
          <img src={banner1} alt="Banner" />
          <button className="bg-primary px-6 py-3 rounded-3xl absolute top-10 z-99">
            Track Your Parcel
          </button>
        </div>
        <div>
          <img src={banner2} alt="Banner" />
        </div>
        <div>
          <img src={banner3} alt="Banner" />
          {/* <p className="legend">Legend 4</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
