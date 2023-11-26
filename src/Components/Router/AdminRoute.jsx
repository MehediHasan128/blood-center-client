import { Spinner } from "keep-react";
import useAdmin from "../Hooks/useAdmin";
import useAuthProvider from "../Hooks/useAuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuthProvider();
    const [isAdmin, adminLoading] = useAdmin();
    const location = useLocation();

    if(loading || adminLoading){
        return <div className="flex justify-center items-center min-h-screen">
        <Spinner color="info" size="xl" />
    </div>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate state={location.pathname} to='/' />
};

export default AdminRoute;