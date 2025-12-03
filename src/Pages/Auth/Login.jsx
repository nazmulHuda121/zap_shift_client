import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser, googleSignIn } = useAuth();

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log('Loged in user Successfully Complete', result);
        navigate(location?.state || '/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state || '/');

        // create user in the Database
        const userInfo = {
          displayName: res.user.name,
          email: res.user.email,
          photoURL: res.user.photoURL,
        };
        axiosSecure.post('/user', userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log('user created in the database');
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="px-26 ">
      <h1 className="text-4xl font-extrabold mb-2">Welcome Back</h1>
      <p className="mb-8 text-gray-600">Login with ZapShift</p>
      {/* Form */}
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="font-medium block mb-1">Email</label>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-3 rounded-md outline-none focus:border-lime-400"
          />
          {errors.email?.type === 'required' && (
            <p className="text-red-500">Email is required</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="font-medium block mb-1">Password</label>
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-3 rounded-md outline-none focus:border-lime-400"
          />
          {errors.password?.type === 'required' && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>

        {/* Forget */}
        <p className="text-sm text-sky-600 cursor-pointer">Forget Password?</p>

        {/* Login Button */}
        <button className="w-full bg-lime-400 py-3 rounded-md font-semibold hover:bg-lime-500 transition">
          Login
        </button>

        {/* Register */}
        <p className="text-sm text-gray-600">
          Don’t have any account?
          <Link
            state={location.state}
            className="text-sky-600 cursor-pointer"
            to={'/register'}
          >
            Register
          </Link>
        </p>

        {/* OR */}
        <div className="flex items-center gap-2">
          <div className="h-px bg-gray-300 w-full"></div>
          <p className="text-gray-500">Or</p>
          <div className="h-px bg-gray-300 w-full"></div>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border py-3 rounded-md bg-gray-100 hover:bg-gray-200 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5"
          />
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
