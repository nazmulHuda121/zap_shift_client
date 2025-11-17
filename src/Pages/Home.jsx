import { Suspense } from 'react';
import Brands from '../Components/Brands';
import { HowItWorks } from '../Components/HowItWorks';
import { OurServices } from '../Components/OurServices';
import Reviews from '../Components/Reviews';
import Banner from './Banner/Banner';

const Home = () => {
  const reviewsPromise = fetch('/reviews.json').then((res) => res.json());
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OurServices />
      <Brands />
      <Suspense>
        <Reviews reviewsPromise={reviewsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
