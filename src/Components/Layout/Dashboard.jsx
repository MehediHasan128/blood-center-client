import { Outlet } from "react-router-dom";
import Sidenav from "../Pages/DashBoard/SideNav/Sidenav";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-[20%]">
        <Sidenav />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
