import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';

const SendParcel = () => {
  const warehouses = useLoaderData();
  const { register, control, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const regionsDupli = warehouses.map((ware) => ware.region);
  const regions = [...new Set(regionsDupli)];

  const senderRegion = useWatch({ control, name: 'senderRegion' });
  const receiverRegion = useWatch({ control, name: 'receiverRegion' });

  const districtByRegion = (region) => {
    const regionDistrict = warehouses.filter((w) => w.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const isDocument = data.parcelType === 'document';
    const parcelWeight = data.parcelWeight;

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
        data.cost = cost;
        Swal.fire({
          title: 'Agree with the cost?',
          text: `You will be charged ${cost} taka !`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, take it!',
        }).then((result) => {
          if (result.isConfirmed) {
            // send the Form Data into the DB
            axiosSecure.post('/parcels', data).then((res) => {
              console.log('after save', res.data);
              if (res.data.insertedId) {
                navigate('/dashboard/my-parcels');
                Swal.fire({
                  title: 'Done!',
                  text: 'Your booking is accepted.',
                  icon: 'success',
                });
              }
            });
          }
        });
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-sm p-10 mt-10 rounded-2xl border border-gray-200">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Add Parcel</h1>

      <p className="text-lg font-medium text-gray-700 mb-4">
        Enter your parcel details
      </p>

      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* Document / Not Document */}
        <div className="flex gap-8 mb-10">
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="radio" value="document" {...register('parcelType')} />
            Document
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input
              type="radio"
              value="not-document"
              {...register('parcelType')}
            />
            Not-Document
          </label>
        </div>

        {/* Parcel Name & Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Parcel Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Parcel Name
            </label>
            <input
              {...register('parcelName')}
              type="text"
              placeholder="Parcel Name"
              className="w-full border border-gray-300 rounded-xl p-3 outline-none"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Parcel Weight (KG)
            </label>
            <input
              {...register('parcelWeight')}
              type="text"
              placeholder="Parcel Weight (KG)"
              className="w-full border border-gray-300 rounded-xl p-3 outline-none"
            />
          </div>
        </div>

        {/* Sender & Receiver Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Sender */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Sender Details
            </h2>

            <div className="grid grid-cols-1 gap-5">
              {/* Sender Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sender Name
                </label>
                <input
                  {...register('senderName')}
                  defaultValue={user.displayName}
                  type="text"
                  placeholder="Sender Name"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none"
                />
              </div>
              {/* Sender Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sender Address
                </label>
                <input
                  {...register('senderAddress')}
                  defaultValue={user.email}
                  type="email"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none"
                />
              </div>

              {/* ============================================================ */}
              {/* sender region */}
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Sender Regions</legend>
                  <select
                    {...register('senderRegion')}
                    defaultValue="Pick a region"
                    className="select"
                  >
                    <option disabled={true}>Pick a region</option>
                    {regions.map((region, ind) => (
                      <option key={ind} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </div>

              {/* sender District */}
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Sender District</legend>
                  <select
                    {...register('senderDistrict')}
                    defaultValue="Pick a district"
                    className="select"
                  >
                    <option disabled={true}>Pick a district</option>
                    {districtByRegion(senderRegion).map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </div>
              {/* ============================================================ */}

              {/* Sender Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sender Contact No
                </label>
                <input
                  {...register('senderContact')}
                  type="text"
                  placeholder="Sender Contact No"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none"
                />
              </div>
              {/* Pickup Instruction */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Instruction
                </label>
                <textarea
                  {...register('pickupInstruction')}
                  rows="3"
                  placeholder="Pickup Instruction"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Receiver Details
            </h2>

            <div className="grid grid-cols-1 gap-5">
              {/* Receiver Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Receiver Name
                </label>
                <input
                  {...register('receiverName')}
                  type="text"
                  placeholder="Receiver Name"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none"
                />
              </div>
              {/* Receiver Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Receiver Address
                </label>
                <input
                  {...register('receiverAddress')}
                  type="email"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none"
                />
              </div>

              {/* ============================================================ */}
              {/* receiver region */}
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Receiver Regions</legend>
                  <select
                    {...register('receiverRegion')}
                    defaultValue="Pick a region"
                    className="select"
                  >
                    <option disabled={true}>Pick a region</option>
                    {regions.map((region, ind) => (
                      <option key={ind} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </div>

              {/* receiver district */}
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Receiver District</legend>
                  <select
                    {...register('receiverDistrict')}
                    defaultValue="Pick a district"
                    className="select"
                  >
                    <option disabled={true}>Pick a district</option>
                    {districtByRegion(receiverRegion).map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </div>
              {/* ============================================================ */}

              {/* Receiver Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Receiver Contact No
                </label>
                <input
                  {...register('receiverContact')}
                  type="text"
                  placeholder="Receiver Contact No"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none"
                />
              </div>
              {/* Delivery Instruction */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Instruction
                </label>
                <textarea
                  {...register('deliveryInstruction')}
                  rows="3"
                  placeholder="Delivery Instruction"
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-8 w-full md:w-auto px-8 py-3 bg-lime-500 text-white rounded-xl font-medium hover:bg-lime-600">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
