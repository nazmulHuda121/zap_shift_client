import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import Coverage from '../Pages/Coverage';
import AboutUs from '../Pages/AboutUs';
import Pricing from '../Pages/Pricing';
import BeARider from '../Pages/BeARider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/service',
        Component: Service,
      },
      {
        path: '/coverage',
        Component: Coverage,
      },
      {
        path: '/about-us',
        Component: AboutUs,
      },
      {
        path: '/pricing',
        Component: Pricing,
      },
      {
        path: '/be-a-rider',
        Component: BeARider,
      },
    ],
  },
]);

export default router;
