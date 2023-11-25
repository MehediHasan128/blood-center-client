import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import Dashboard from "../Layout/Dashboard";
import DashBoardHome from "../Pages/DashBoard/DashBoardHome/DashBoardHome";
import DonationRequest from "../Pages/DashBoard/DonationRequest/DonationRequest";
import MyDonationReq from "../Pages/DashBoard/MyDonationReq/MyDonationReq";

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
            }
        ]
    },
    {
        path: 'dashBoard',
        element: <Dashboard />,
        children: [
            //doner routes
            {
                path: '/dashBoard/home',
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