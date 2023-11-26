import { Spinner } from "keep-react";
import useAuthProvider from "../Hooks/useAuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading} = useAuthProvider();
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center min-h-screen">
            <Spinner color="info" size="xl" />
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' />
};

export default PrivetRoute;