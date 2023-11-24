import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen overflow-x-hidden">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;