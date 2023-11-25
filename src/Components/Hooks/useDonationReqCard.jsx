import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "./useAuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useDonationReqCard = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuthProvider();
    const {refetch, data: donationReq = [] } = useQuery({
        queryKey: ['donationReq', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/donationRequest?email=${user?.email}`)
            return res.data;
        }
    })

    return [donationReq, refetch]
};

export default useDonationReqCard;