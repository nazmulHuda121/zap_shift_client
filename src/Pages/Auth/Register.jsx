import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleRegister = async (data) => {
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then(() => {
        // 1. Store the image in form data
        const formData = new FormData();
        formData.append('image', profileImg);

        // 2. send the photo to store and get the url
        const image_API_URI = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;

        axios.post(image_API_URI, formData).then((res) => {
          const photoURL = res.data.data.url;

          //update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };

          // create user in the Database
          const userInfo = {
            displayName: data.name,
            email: data.email,
            photoURL: photoURL,
          };
          axiosSecure.post('/user', userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log('user created in the database');
            }
          });

          updateUserProfile(userProfile)
            .then(() => {
              console.log('updated');
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-26">
      <h1 className="text-4xl font-extrabold mb-2">Create an Account</h1>
      <p className="mb-8 text-gray-600">Register with ZapShift</p>

      {/* Form */}
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="font-medium block mb-1">Name</label>
          <input
            {...register('text', { required: true })}
            type="text"
            placeholder="Name"
            className="w-full border px-4 py-3 rounded-md outline-none focus:border-lime-400"
          />
        </div>

        {/* Photo image upload */}
        <div>
          <label className="font-medium block mb-1">Photo</label>
          <input
            {...register('photo', { required: true })}
            type="file"
            placeholder="Upload Photo"
            className="file-input"
          />
        </div>

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
            {...register('password', { minLength: 6 })}
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-3 rounded-md outline-none focus:border-lime-400"
          />
          {errors.password?.type === 'minLength' && (
            <p className="text-red-500">
              Password must be 6 charecter or Longer
            </p>
          )}
        </div>

        {/* Register Button */}
        <button className="w-full bg-lime-400 py-3 rounded-md font-semibold hover:bg-lime-500 transition">
          Register
        </button>

        {/* Register */}
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to={'/login'}>
            <span className="text-sky-600 cursor-pointer">Login</span>
          </Link>
        </p>

        {/* OR */}
        <div className="flex items-center gap-2">
          <div className="h-px bg-gray-300 w-full"></div>
          <p className="text-gray-500">Or</p>
          <div className="h-px bg-gray-300 w-full"></div>
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 border py-3 rounded-md bg-gray-100 hover:bg-gray-200 transition">
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

export default Register;
