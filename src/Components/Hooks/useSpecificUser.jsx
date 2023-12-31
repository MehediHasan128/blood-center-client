import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "./useAuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useSpecificUser = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuthProvider();

    const {data: specificUser = [], refetch} = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/${user.email}`)
            return res.data;
        }
    });
    return [specificUser, refetch]
};

export default useSpecificUser;