import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import riderImg from '../assets/agent-pending.png';

const Rider = () => {
  const warehouses = useLoaderData(); // [{ region, district, warehouseName }]
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  // unique regions
  const regions = [...new Set(warehouses.map((w) => w.region))];

  // TanStack mutation
  const riderMutation = useMutation({
    mutationFn: async (formData) => {
      const res = await axiosSecure.post('/riders', formData);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        Swal.fire(
          'Success!',
          'Your rider application has been submitted!',
          'success'
        );
        navigate('/');
      }
    },
  });

  const onSubmit = (data) => {
    riderMutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm p-10 border border-gray-200">
        {/* HEADER */}
        <h1 className="text-5xl font-bold text-[#0C2A2A]">Be a Rider</h1>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Join our fast-growing delivery network and earn with freedom. Flexible
          hours, smooth workflow, and top-rated rider support.
        </p>

        <hr className="my-10" />

        <h2 className="text-2xl font-bold text-[#0C2A2A] mb-6">
          Tell us about yourself
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name + Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="font-semibold text-gray-700">Your Name</label>
                <input
                  {...register('name')}
                  defaultValue={user?.displayName}
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2 outline-none"
                />
              </div>

              {/* Age */}
              <div>
                <label className="font-semibold text-gray-700">Your Age</label>
                <input
                  {...register('age')}
                  type="number"
                  placeholder="Your age"
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2 outline-none"
                />
              </div>
            </div>

            {/* Email + Region */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="font-semibold text-gray-700">
                  Your Email
                </label>
                <input
                  {...register('email')}
                  defaultValue={user?.email}
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2 outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700">
                  Your Region
                </label>
                <select
                  {...register('region')}
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2 outline-none"
                >
                  <option disabled value="">
                    Select your region
                  </option>
                  {regions.map((region, idx) => (
                    <option key={idx} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* NID + Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="font-semibold text-gray-700">NID No</label>
                <input
                  {...register('nid')}
                  type="text"
                  placeholder="NID"
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2 outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700">Contact</label>
                <input
                  {...register('contact')}
                  type="text"
                  placeholder="Contact"
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2 outline-none"
                />
              </div>
            </div>

            {/* Warehouse */}
            <div>
              <label className="font-semibold text-gray-700">
                Select Warehouse
              </label>
              <select
                {...register('warehouse')}
                className="w-full border border-gray-300 rounded-xl p-3 mt-2 outline-none"
              >
                <option disabled value="">
                  Select warehouse
                </option>

                {warehouses.map((w, i) => (
                  <option key={i} value={w.warehouseName}>
                    {w.region} — {w.district} — {w.warehouseName}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              className="w-full md:w-auto px-8 py-3 bg-lime-500 text-white rounded-xl font-medium hover:bg-lime-600"
              disabled={riderMutation.isPending}
            >
              {riderMutation.isPending ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center">
            <img src={riderImg} alt="rider" className="w-80 lg:w-[340px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;
