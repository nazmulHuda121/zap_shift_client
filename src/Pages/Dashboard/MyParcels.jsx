import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ['my-parcels', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2>My all parcels here ..... {parcels.length}</h2>
    </div>
  );
};

export default MyParcels;
