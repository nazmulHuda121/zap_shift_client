import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['my-parcels', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  console.log(parcels);

  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`parcels/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your parcel has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderAddress: parcel.senderAddress,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post(
      '/payment-checkout-session',
      paymentInfo
    );
    console.log(res.data.url);
    window.location.assign(res.data.url);
  };

  return (
    <div>
      <h2>My all parcels here ..... {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Delevery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel.id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === 'paid' ? (
                    <span className="text-green-500">Paid</span>
                  ) : (
                    // <Link to={`/dashboard/payment/${parcel._id}`}>
                    //   <button className="btn btn-primary text-black">
                    //     Pay
                    //   </button>
                    // </Link>
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-primary text-black"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>blue</td>
                <td className="space-x-2">
                  <button className="btn btn-square">
                    <FcSearch />
                  </button>
                  <button className="btn btn-square">
                    <FaRegEdit />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
