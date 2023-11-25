import { useForm } from "react-hook-form";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const DonationRequest = () => {
  const { user } = useAuthProvider();
    const {register, handleSubmit} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [districts, setDistricts] = useState([]);
    const [upazila, setUpazila] = useState([]);

  const requesterName = user?.displayName;
  const requesterEmail = user?.email;

  useEffect(() =>{
    axiosPublic.get('/districts')
    .then(res =>{
        setDistricts(res.data)
    })
  },[axiosPublic])

  const handelFindUazila = e =>{
    const districtName = e.target.value;
    axiosPublic.get(`/upazila/${districtName}`)
    .then(res =>{
        setUpazila(res.data);
      })
  }



  const onSubmit = (data) =>{
    const recipientName = data.recipientName;
    const recipientBloodGroup = data.recipientBloodGroup;
    const recipientDistrict = data.recipientDistrict;
    const recipientUpazila = data.recipientUpazila;
    const reciptionDate = data.date;
    const reciptionTime = data.time;

    const requestInformation = {requesterName, requesterEmail, recipientName, recipientBloodGroup, recipientDistrict, recipientUpazila, reciptionDate, reciptionTime, donationStatus: 'Pending'}

    // axiosSecure.post('/donationRequest', requestInformation)
  }

  return (
    <div className="flex justify-center items-center min-h-screen mb-20 lg:mb-0">
      <div className="w-[90%]">
        <h1 className="text-2xl lg:text-4xl font-bold text-center leading-relaxed">
          If you need a drop of <span className="text-red-700">blood</span>{" "}
          <br /> just fill the request form
        </h1>
        <div className="mt-10 lg:mt-20">
          <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[60%] mx-auto">

            {/* User Information */}
            <div className="relative">
              <hr />
              <h1 className="text-base font-semibold absolute -top-3 lg:-top-[11px] left-[80px] lg:left-80 bg-white px-4">
                Requester Information
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 mt-10 lg:my-16 mb-10">
              <div className="lg:w-[50%]">
                <label className="font-semibold">Name</label>
                <input
                  className="block w-full px-5 py-3 border rounded-md mt-2"
                  type="text"
                  {...register('requesterName')}
                  value={requesterName}
                />
              </div>
              <div className="lg:w-[50%]">
                <label className="font-semibold">Email</label>
                <input
                  className="block w-full px-5 py-3 border rounded-md mt-2"
                  type="text"
                  {...register('requesterEmail')}
                  value={requesterEmail}
                />
              </div>
            </div>


            {/* Recipent Information */}
            <div className="relative">
              <hr />
              <h1 className="text-base font-semibold absolute -top-3 lg:-top-[11px] left-[80px] lg:left-80 bg-white px-4">
                Recipient Information
              </h1>
            </div>
            <div className="space-y-5 mt-10">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="lg:w-[50%]">
                  <label className="font-semibold">Recipient Name</label>
                  <input
                    className="block w-full px-5 py-3 border rounded-md mt-2"
                    type="text"
                    {...register('recipientName')}
                    placeholder="Enter the recipient name"
                  />
                </div>
                <div className="lg:w-[50%]">
                  <label className="font-semibold">Blood Group</label>
                  <select {...register('recipientBloodGroup')} className="block w-full px-5 py-3 border rounded-md mt-2">
                    <option value=''>--- Blood Group ---</option>
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
              </div>
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="lg:w-[50%]">
                  <label className="font-semibold">Dstrict</label>
                  <select {...register('recipientDistrict', {
                    onChange: (e) => {handelFindUazila(e)}
                  })} className="block w-full px-5 py-3 border rounded-md mt-2">
                    <option value=''>--- Select District ---</option>
                    {
                        districts.map(district => <option key={district._id} value={district.name}>{district.name}</option>)
                    }
                  </select>
                </div>
                <div className="lg:w-[50%]">
                  <label className="font-semibold">Upazila</label>
                  <select {...register('recipientUpazila')} className="block w-full px-5 py-3 border rounded-md mt-2">
                    <option value=''>--- Select Upazila ---</option>
                    {
                        upazila.map(zila => <option key={zila._id} value={zila.name}>{zila.name}</option>)
                    }
                  </select>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="lg:w-[50%]">
                  <label className="font-semibold">Date</label>
                  <input type="date" className="block w-full px-5 py-3 border rounded-md mt-2" {...register('date')} />
                </div>
                <div className="lg:w-[50%]">
                  <label className="font-semibold">Time</label>
                  <input type="time" className="block w-full px-5 py-3 border rounded-md mt-2" {...register('time')} />
                </div>
              </div>

              <div>
                <input type="submit" value="Submit" className="bg-red-700 px-5 py-3 rounded-md text-white" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationRequest;
