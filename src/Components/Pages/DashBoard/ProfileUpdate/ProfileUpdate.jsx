import { Helmet } from "react-helmet-async";
import useSpecificUser from "../../../Hooks/useSpecificUser";
import { Avatar, Spinner } from "keep-react";
import { FaUser } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ProfileUpdate = () => {
  const [specificUser, refetch] = useSpecificUser();
  const { register, handleSubmit } = useForm();
  const {user, setUserProfile} = useAuthProvider();
  const axiosPublic = useAxiosPublic();
  const [districts, setDistricts] = useState([]);
  const [upazila, setUpazila] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axiosPublic.get("/districts").then((res) => {
      setDistricts(res.data);
    });
  }, [axiosPublic]);

  const handelFindUpazila = (e) => {
    const districtName = e.target.value;
    axiosPublic.get(`/upazila/${districtName}`).then((res) => {
      setUpazila(res.data);
    });
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const updateName = data.name;
    const updatedBloodGrp = data.bloodGroup;
    const updatedDistrict = data.district;
    const updatedUpazila = data.upazila;
    const Image = {image: data.image[0]};

    
    const res = await axiosPublic.post(image_hosting_api, Image, {
        headers: {
            "content-type": "multipart/form-data",
        },
    });

    const profilePicture = res.data.data.display_url

    const updatedUserInformation = {updateName, updatedBloodGrp, updatedDistrict, updatedUpazila, profilePicture};

    if(res.data.success){
      setUserProfile(user, updateName, res.data.data.display_url)

        axiosPublic.put(`/users/${specificUser._id}`, updatedUserInformation)
        .then(res =>{
            if(res.data.modifiedCount > 0){
              Swal.fire({
                icon: "success",
                title: "Your Profile Information Update",
                showConfirmButton: false,
                timer: 1000
              });
            }
            setLoading(false)
            refetch();
            navigate('/dashBoard/profile')
        })
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Blood Center/Profile</title>
      </Helmet>
      <div className="md:min-w-[50%] my-20">
        <h1 className="text-6xl font-bold text-center">
          Update User <span className="text-red-700">Profile</span>
        </h1>
        <div className="mt-24 p-10 bg-slate-100 rounded-xl">
          <Avatar
            shape="circle"
            size="xl"
            className="w-72 h-72 mx-auto object-cover"
            img={specificUser.image}
          />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[80%] mx-auto mt-8 space-y-5"
          >
            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <FaUser className="text-2xl text-gray-700" />
              <input
                className="bg-transparent px-5 py-2 w-full border-l-2 focus:outline-none"
                type="text"
                placeholder="Enter your name"
                defaultValue={specificUser.name}
                {...register("name")}
              />
            </div>

            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <select
                className="bg-transparent px-5 py-2 w-full focus:outline-none"
                defaultValue={specificUser.blodGroup}
                {...register("bloodGroup")}
              >
                <option value={specificUser.blodGroup}>{specificUser.blodGroup}</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="px-5 py-2 flex items-center gap-3 border w-full rounded-md">
                <select
                  className="bg-transparent px-5 py-2 w-full focus:outline-none"
                  defaultValue={specificUser.district}
                  {...register("district", {
                    onChange: (e) => {
                      handelFindUpazila(e);
                    },
                  })}
                >
                  <option value={specificUser.district}>{specificUser.district}</option>
                  {districts.map((district) => (
                    <option key={district._id} value={district.name}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="px-5 py-2 flex items-center gap-3 border w-full rounded-md">
                <select
                  className="bg-transparent px-5 py-2 w-full focus:outline-none"
                  defaultValue={specificUser.upazila}
                  {...register("upazila")}
                >
                  <option value={specificUser.upazila}>{specificUser.upazila}</option>
                  {upazila.map((zila) => (
                    <option key={zila._id} value={zila.name}>
                      {zila.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <input
                className="bg-transparen px-5 py-2 w-full focus:outline-none"
                type="file"
                {...register("image")}
              />
            </div>
            <div className="bg-red-700 w-fit hover:bg-red-800 duration-700 px-5 py-2 text-white rounded-md cursor-pointer flex items-center gap-3">
              {loading && <Spinner color="info" size="md" />}
              <input className="text-lg cursor-pointer" type="submit" value="Update" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
