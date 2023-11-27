import { Avatar } from "keep-react";
import useSpecificUser from "../../../Hooks/useSpecificUser";
import { FaDroplet } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Profile = () => {
  const [specificUser] = useSpecificUser();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Blood Center/Profile</title>
      </Helmet>
      <div className="md:min-w-[45%] mb-20">
        <h1 className="text-6xl font-bold text-center">
          User <span className="text-red-700">Profile</span>
        </h1>
        <div className="mt-24 p-10 bg-slate-100 rounded-xl">
          <Avatar
            shape="circle"
            size="xl"
            className="w-72 h-72 mx-auto object-cover"
            img={specificUser.image}
          />
          <div className="text-center mt-10 space-y-4">
            <h1 className="text-xl md:text-3xl font-medium">
              Name: {specificUser.name}
            </h1>
            <h1 className="text-xl md:text-3xl font-medium">
              Email: {specificUser.email}
            </h1>
            <div className="text-3xl font-medium flex justify-center items-center">
              <FaDroplet className="text-red-700" />
              <h1>{specificUser.blodGroup}</h1>
            </div>
          </div>
          <div className="mx-5 mt-10">
            <p className="text-xl mb-3 font-semibold">More Information</p>
            <hr className="w-[20%] border border-red-700" />
            <div className="mt-5">
              <div className="flex flex-col md:flex-row justify-between">
                <p className="text-lg md:text-2xl font-medium">
                  District: {specificUser.district}
                </p>
                <p className="text-lg md:text-2xl font-medium">
                  Upazila: {specificUser.upazila}
                </p>
              </div>
            </div>
          </div>

          <Link to='/dashBoard/profileUpdate'>
          <button className="flex items-center text-xl mt-10 gap-3 bg-red-700 hover:bg-red-900 duration-700 px-5 py-3 text-white rounded-md">
          <TiPencil className="text-2xl" />
          Update profile
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
