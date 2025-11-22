import { Link } from 'react-router';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <>
      <Link to={'/'}>
        <div className="inline-flex items-end -ms-3">
          <img src={logo} alt="logo" />
          <p className="text-3xl font-extrabold">ZapShift</p>
        </div>
      </Link>
    </>
  );
};

export default Logo;
