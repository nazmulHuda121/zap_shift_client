import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import Coverage from '../Pages/Coverage';
import AboutUs from '../Pages/AboutUs';
import Pricing from '../Pages/Pricing';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Loading from '../Components/Loading';
import PrivateRoute from './PrivateRoute';
import Rider from '../Components/Rider';
import SendParcel from '../Pages/SendParcel';
import DashboardLayout from '../Layouts/DashboardLayout';
import MyParcels from '../Pages/Dashboard/MyParcels';
import Payment from '../Pages/Dashboard/Payment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: '/service',
        Component: Service,
      },
      {
        path: '/coverage',
        Component: Coverage,
        loader: () => fetch('/warehouses.json').then((res) => res.json()),
        hydrateFallbackElement: <Loading />,
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
        path: '/send-parcel',
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch('/warehouses.json').then((res) => res.json()),
      },
      {
        path: '/rider',
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'my-parcels',
        Component: MyParcels,
      },
      {
        path: 'payment/:parcelId',
        Component: Payment,
      },
    ],
  },
]);

export default router;
