import { Link, NavLink } from 'react-router';
import Logo from '../../Components/Logo';
import useAuth from '../../hooks/useAuth';
import { auth } from '../../firebase/firebase.config';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isSticky, setIsSticky] = useState(false);

  const handleLogOut = () => {
    logOut(auth)
      .then(() => toast('Log Out Successful'))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {user && (
        <>
          <li>
            <NavLink to="/send-parcel" className="text-gray-500">
              Send Parcel
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-parcels" className="text-gray-500">
              My parcels
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className={`py-1 rounded-2xl sticky top-0 z-50 transition-all duration-300 ${
        isSticky
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="navbar md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow gap-3"
            >
              {nav}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{nav}</ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <span onClick={handleLogOut} className="btn">
              Log Out
            </span>
          ) : (
            <Link to="/login">
              <span className="btn">Log In</span>
            </Link>
          )}

          <Link to="/rider">
            <span className="btn">Be a Rider</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
