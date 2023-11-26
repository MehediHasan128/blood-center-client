import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const {data: allUser = []} = useQuery({
        queryKey: ['allUser'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    return [allUser]
};

export default useAllUsers;