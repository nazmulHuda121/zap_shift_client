import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Payment = () => {
  const { parcelId } = useParams();
  const acxiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => {
      const res = await acxiosSecure.get(`/parcels/${parcelId}`);
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

  return (
    <div className="p-5 space-y-2">
      <h2>
        <span className="font-bold">Please pay for:</span> {parcel.parcelName}
      </h2>
      <button className="btn btn-primary text-black">Pay</button>
    </div>
  );
};

export default Payment;
