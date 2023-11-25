import { Outlet } from "react-router-dom";
import Sidenav from "../Pages/DashBoard/SideNav/Sidenav";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="lg:w-[20%]">
            <Sidenav />
            </div>
            <div className="lg:flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;