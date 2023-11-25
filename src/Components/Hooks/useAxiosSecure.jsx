import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthProvider from "./useAuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {

    const navigate = useNavigate();
    const {userLogout} = useAuthProvider();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error)
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async(error) =>{
        const statusCode = error.response.status
        if(statusCode === 401 || statusCode === 403){
            await userLogout();
            navigate('/')
        }
    })

    return axiosSecure;
};

export default useAxiosSecure;