import doner from "../../../../assets/Banner/blood.jpg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuthProvider from "../../../Hooks/useAuthProvider";


// Image hostion api
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Registration = () => {

  const {createUser, setUserProfile} = useAuthProvider();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [districts, setDistricts] = useState([]);
    const [upazila, setUpazila] = useState([]);
    const {register, handleSubmit} = useForm();

    useEffect(() =>{
        axiosPublic.get('/districts')
        .then(res =>{
            setDistricts(res.data);
        })
    },[axiosPublic])

    const handelFindUpazila = (e) =>{
        const districtName = e.target.value;
        axiosPublic.get(`/upazila/${districtName}`)
        .then(res =>{
          setUpazila(res.data);
        })
    }

    const onSubmit = async(data) =>{
      const donerName = data.name;
      const donerEmail = data.email;
      const blodGroup = data.bloodGroup;
      const district = data.district;
      const upazila = data.upazila;
      const password = data.password;
      const checkPassword = data.checkPassword;

      const imageFile = {image: data.image[0]};

      if(password === checkPassword){
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data"
          }
        })
  
        if(res.data.success){
          createUser(donerEmail, password)
          .then(result =>{
            const user = result.user;
            if(user.uid){

              setUserProfile(user, donerName, res.data.data.display_url)

              const donerInformation = {
                name: donerName,
                email: donerEmail,
                blodGroup,
                district,
                upazila,
                image: res.data.data.display_url,
                role: 'doner',
                status: 'active'
              }

              console.log(user);
      
              axiosSecure.post('/users', donerInformation)
              .then(res => {
                if(res.data.insertedId){
                  Swal.fire({
                    icon: "success",
                    title: "Create user successfully",
                    showConfirmButton: false,
                    timer: 1000
                  });
                }
              })
            }
          })          
        }
      }else{
        console.log('Do not match the password');
      }
    }

  return (
    <div className="flex justify-center items-center min-h-screen container mx-auto">
      <div className="flex flex-col lg:flex-row lg:w-[80%] mx-auto">
        <div className="lg:w-[50%]">
          <img className="h-full object-cover" src={doner} alt="" />
        </div>
        <div className="lg:w-[50%] bg-slate-50 dark:bg-zinc-700 py-14">
          <h1 className="text-4xl text-center dark:text-white">Register as a doner</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] mx-auto mt-8 space-y-5">
            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <FaUser className="text-2xl text-gray-700 dark:text-white" />
              <input
                className="bg-slate-50 px-5 py-2 w-full border-l-2 focus:outline-none dark:bg-zinc-700"
                type="text"
                placeholder="Enter your name"
                {...register('name')}
              />
            </div>
            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <MdEmail className="text-2xl text-gray-700 dark:text-white" />
              <input
                className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full border-l-2 focus:outline-none"
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
                <TbPasswordFingerprint className="text-2xl text-gray-700 dark:text-white" />
                <input
                  className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full border-l-2 focus:outline-none"
                  type="password"
                  placeholder="Enter your password"
                  {...register('password')}
                />
              </div>
              <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
                <TbPasswordFingerprint className="text-2xl text-gray-700 dark:text-white" />
                <input
                  className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full border-l-2 focus:outline-none"
                  type="password"
                  placeholder="Enter possword again"
                  {...register('checkPassword')}
                />
              </div>
            </div>

            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <select className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full focus:outline-none"
              {...register('bloodGroup')}
              >
                <option>--- Blood Group ---</option>
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
              <select className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full focus:outline-none"
              {...register('district', {
                onChange: (e) => {handelFindUpazila(e)}
              })}
              >
                <option>--- Select District ---</option>
                {
                    districts.map(district => <option key={district._id} value={district.name}>{district.name}</option>)
                }
              </select>
            </div>
            <div className="px-5 py-2 flex items-center gap-3 border w-full rounded-md">
              <select className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full focus:outline-none"
              {...register('upazila')}
              >
                <option>--- Select Upazila ---</option>
                {
                  upazila.map(zila => <option key={zila._id} value={zila.name}>{zila.name}</option>)
                }
              </select>
            </div>
            </div>

            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
                <input className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full focus:outline-none" type="file" {...register('image')} />
            </div>
            <div>
                <input className="bg-red-700 hover:bg-red-800 duration-700 px-5 py-2 text-white rounded-md cursor-pointer" type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
