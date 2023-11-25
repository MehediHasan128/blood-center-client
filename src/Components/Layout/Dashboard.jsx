import { Outlet } from "react-router-dom";
import Sidenav from "../Pages/DashBoard/SideNav/Sidenav";


const Dashboard = () => {
    return (
        <div>
            <div>
            <Sidenav />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;