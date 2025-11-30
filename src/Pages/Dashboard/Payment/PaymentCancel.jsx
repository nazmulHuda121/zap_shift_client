import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
  return (
    <div className="p-5 space-y-3">
      <h2>Payment is cancel. please try again</h2>
      <Link to={'/dashboard/my-parcels'}>
        <button className="btn btn-primary text-black">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancel;
