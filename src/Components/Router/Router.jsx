import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import Dashboard from "../Layout/Dashboard";
import DashBoardHome from "../Pages/DashBoard/DashBoardHome/DashBoardHome";
import DonationRequest from "../Pages/DashBoard/DonationRequest/DonationRequest";
import MyDonationReq from "../Pages/DashBoard/MyDonationReq/MyDonationReq";
import AllDonationRequest from "../Pages/Home/AllDonationRequest/AllDonationRequest";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/donationRequest',
                element: <AllDonationRequest />
            }
        ]
    },
    {
        path: '/dashBoard',
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        children: [
            //doner routes
            {
                path: '/dashBoard',
                element: <DashBoardHome />,
                
            },
            {
                path: '/dashBoard/create-donation-request',
                element: <DonationRequest />
            },
            {
                path: '/dashBoard/my-donattion-request',
                element: <MyDonationReq />
            }
        ]
    }
]);

export default router;