import { Link, NavLink } from 'react-router';
import Logo from '../../Components/Logo';
import useAuth from '../../hooks/useAuth';
import { auth } from '../../firebase/firebase.config';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut(auth)
      .then(() => {
        toast('Log Out Successful');
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <NavLink to="/send-parcel" className="text-gray-500">
          Send Parcel
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink className="text-gray-500" to={'dashboard/my-parcels'}>
              My parcels
            </NavLink>
          </li>
        </>
      )}
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
          <ul className="menu menu-horizontal px-1 gap-4">{nav}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <a onClick={handleLogOut} className="btn">
              Log Out
            </a>
          ) : (
            <Link to={'/login'}>
              <a className=" btn ">Log In</a>
            </Link>
          )}

          <Link to="/rider">
            <a className=" btn ">Be a Rider</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
