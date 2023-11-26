import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllRequest = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, data: allRequest = []} = useQuery({
        queryKey: ['allRequest'],
        queryFn: async() =>{
            const res = await axiosPublic.get('allDonationRequest')
            return res.data;
        }
    })

    return [allRequest, refetch]
};

export default useAllRequest;