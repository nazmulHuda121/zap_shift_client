import { Link, NavLink } from 'react-router';
import { BsGithub } from 'react-icons/bs';
import Logo from '../../Components/Logo';

const Header = () => {
  const nav = (
    <>
      <li>
        <NavLink to="/service" className="text-gray-500">
          Service
        </NavLink>
      </li>
      <li>
        <NavLink to="/coverage" className="text-gray-500">
          Coverage
        </NavLink>
      </li>

      <li>
        <NavLink to="/about-us" className="text-gray-500">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/pricing" className="text-gray-500">
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to="/be-a-rider" className="text-gray-500">
          Be a Ride
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow bg-white py-1 rounded-2xl">
      <div className="navbar md:w-11/12  mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow gap-3 "
            >
              {nav}
            </ul>
          </div>
            <Logo />
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{nav}</ul>
        </div>
        <div className="navbar-end gap-3">
          <a className=" btn ">Sign In</a>
          <a className=" btn ">Be a Rider</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
