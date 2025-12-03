import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-4xl font-semibold">
        Payment History: {payments.length}
      </h2>

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra w-full">
          <thead className="text-lg">
            <tr>
              <th>#</th>
              <th>Parcel Name</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Transaction ID</th>
              <th>Status</th>
              <th>Paid At</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p, index) => (
              <tr key={p._id}>
                <td>{index + 1}</td>
                <td>{p.parcelName}</td>
                <td>${p.amount}</td>
                <td>{p.currency?.toUpperCase()}</td>
                <td className="font-mono text-sm text-blue-800">
                  {p.transictionId}
                </td>
                <td>
                  <span className="badge badge-success text-white">
                    {p.paymentStatus}
                  </span>
                </td>
                <td>{new Date(p.paidAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
