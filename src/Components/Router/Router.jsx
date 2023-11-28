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
import AllDonationReq from "../Pages/DashBoard/Admin/AllDonationReq/AllDonationReq";
import AllUsers from "../Pages/DashBoard/Admin/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Profile from "../Pages/DashBoard/Profile/Profile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProfileUpdate from "../Pages/DashBoard/ProfileUpdate/ProfileUpdate";
import UpdateDonation from "../Pages/DashBoard/UpdateDonation/UpdateDonation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
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
                element: <PrivetRoute><AllDonationRequest /></PrivetRoute>
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
                element: <PrivetRoute><DonationRequest /></PrivetRoute>
            },
            {
                path: '/dashBoard/my-donattion-request',
                element: <PrivetRoute><MyDonationReq /></PrivetRoute>
            },
            {
                path: '/dashBoard/profile',
                element: <Profile />
            },
            {
                path: '/dashBoard/profileUpdate',
                element: <ProfileUpdate />
            },
            {
                path: '/dashBoard/updateDonation/:id',
                element: <UpdateDonation />,
                loader: ({params}) => fetch(`http://localhost:5000/updateDonation/${params.id}`)
            },


            // Admin Route
            {
                path: '/dashBoard/all-blood-donation-request',
                element: <AdminRoute><AllDonationReq /></AdminRoute>
            },
            {
                path: '/dashBoard/all-users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            }
        ]
    }
]);

export default router;