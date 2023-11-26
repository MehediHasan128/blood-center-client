import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "./useAuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user, loading} = useAuthProvider();
    const axiosSecure = useAxiosSecure();

    const {data: isAdmin, isPending: adminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin
        }
    })
    return [isAdmin, adminLoading]
};

export default useAdmin;