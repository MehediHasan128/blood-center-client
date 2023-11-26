import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const {data: allUser = [], refetch} = useQuery({
        queryKey: ['allUser'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    return [allUser, refetch]
};

export default useAllUsers;