import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState();
  const sessionId = searchParams.get('session_id');
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            trackingId: res.data.trackingId,
            transictionId: res.data.transictionId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Payment Successfully complete
      </h2>
      <p className="text-blue-700">
        <span className="font-semibold text-black">Your Transiction id:</span>{' '}
        {paymentInfo?.transictionId}
      </p>
      <p className="text-blue-700">
        <span className="text-black font-semibold">Your Transiction id:</span>{' '}
        {paymentInfo?.transictionId}
      </p>
    </div>
  );
};

export default PaymentSuccess;
