import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <div>
        <p>LOADING....</p>
      </div>
    );
  }

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelName: parcel.parcelName,
      parcelId: parcel._id,
      senderEmail: parcel.senderAddress,
    };

    const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  return (
    <div className="p-5 space-y-2">
      <h2>
        <span className="font-bold">Please pay ${parcel.cost} for:</span>{' '}
        {parcel.parcelName}
      </h2>
      <button onClick={handlePayment} className="btn btn-primary text-black">
        Pay
      </button>
    </div>
  );
};

export default Payment;
