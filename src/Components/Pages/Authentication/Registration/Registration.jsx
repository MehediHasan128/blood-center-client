import doner from "../../../../assets/Banner/blood.jpg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";

const Registration = () => {
  return (
    <div className="flex justify-center items-center min-h-screen container mx-auto">
      <div className="flex w-[80%] mx-auto">
        <div className="w-[50%]">
          <img className="h-full object-cover" src={doner} alt="" />
        </div>
        <div className="w-[50%] bg-slate-50 dark:bg-zinc-700 py-14">
          <h1 className="text-4xl text-center dark:text-white">Register as a doner</h1>
          <form className="w-[80%] mx-auto mt-8 space-y-5">
            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <FaUser className="text-2xl text-gray-700 dark:text-white" />
              <input
                className="bg-slate-50 px-5 py-2 w-full border-l-2 focus:outline-none dark:bg-zinc-700"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <MdEmail className="text-2xl text-gray-700 dark:text-white" />
              <input
                className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full border-l-2 focus:outline-none"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex gap-5">
              <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
                <TbPasswordFingerprint className="text-2xl text-gray-700 dark:text-white" />
                <input
                  className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full border-l-2 focus:outline-none"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
                <TbPasswordFingerprint className="text-2xl text-gray-700 dark:text-white" />
                <input
                  className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full border-l-2 focus:outline-none"
                  type="password"
                  placeholder="Enter possword again"
                />
              </div>
            </div>

            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <select className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full focus:outline-none">
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

            <div className="flex gap-5">
            <div className="px-5 py-2 flex items-center gap-3 border w-full rounded-md">
              <select className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full focus:outline-none">
                <option>--- Select District ---</option>
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
            <div className="px-5 py-2 flex items-center gap-3 border w-full rounded-md">
              <select className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full focus:outline-none">
                <option>--- Select Upazila ---</option>
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

            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
                <input className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full focus:outline-none" type="file" id="upload" />
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
