import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaUsers } from "react-icons/fa";
import { FaDroplet, FaCodePullRequest } from "react-icons/fa6";

const AdminHome = () => {

    const axiosPublic = useAxiosPublic();
    const [adminState, setAdminState] = useState();
    console.log(adminState);

    useEffect(() =>{
        axiosPublic.get('/admin-state')
        .then(res =>{
            setAdminState(res.data);
        })
    },[axiosPublic])

    

    return (
        <div>
            <h1 className="text-3xl font-medium">All Information</h1>
            <div className="flex justify-center gap-10 mt-16">
                <div className="bg-slate-300 w-fit p-10 text-2xl font-medium text-center space-y-3 rounded-xl shadow-lg">
                    <FaUsers className="text-7xl w-fit mx-auto" />
                    <h1 className="text-2xl font-bold">Total Users</h1>
                    <p className="text-5xl">{adminState?.totalReq}</p>
                </div>
                <div className="bg-slate-300 w-fit p-10 text-2xl font-medium text-center space-y-3 rounded-xl shadow-lg">
                    <FaCodePullRequest className="text-7xl w-fit mx-auto" />
                    <h1 className="text-2xl font-bold">Total Request</h1>
                    <p className="text-5xl">{adminState?.users}</p>
                </div>
                <div className="bg-slate-300 w-fit p-10 text-2xl font-medium text-center space-y-3 rounded-xl shadow-lg">
                    <FaDroplet className="text-7xl w-fit mx-auto" />
                    <h1 className="text-2xl font-bold">Total Doners</h1>
                    <p className="text-5xl">{adminState?.totalDonars}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;