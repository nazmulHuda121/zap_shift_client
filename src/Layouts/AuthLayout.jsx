import Logo from '../Components/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png';

const AuthLayout = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto border-sky-100">
        <Logo />
        <div className="lg:flex lg:items-center pt-22">
          <div className="flex-1">
            <Outlet />
          </div>
          <div className="flex-1">
            <img src={authImage} alt="authImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
