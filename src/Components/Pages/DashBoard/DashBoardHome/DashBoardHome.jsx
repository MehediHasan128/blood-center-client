import { Helmet } from "react-helmet-async";
import useAuthProvider from "../../../Hooks/useAuthProvider";

const DashBoardHome = () => {
  const { user } = useAuthProvider();

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Blood Center/DashBoard Home</title>
      </Helmet>
      <div>
        <h1 className="text-7xl font-semibold">
          <span className="text-red-700">Wlcome</span> {user?.displayName}
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default DashBoardHome;
