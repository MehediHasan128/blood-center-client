import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import loginBg from "../../../../assets/Banner/blood.jpg";
import { useForm } from "react-hook-form";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { userLogin } = useAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    userLogin(email, password).then((result) => {
      const user = result.user;
      if (user.uid) {
        navigate(location?.state ? location.state : "/");
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen container mx-auto">
      <Helmet>
        <title>Blood Center/Login</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row lg:w-[80%] mx-auto">
        <div className="lg:w-[50%]">
          <img className="h-full object-cover" src={loginBg} alt="" />
        </div>
        <div className="lg:w-[50%] bg-slate-50 dark:bg-zinc-700 py-14">
          <h1 className="text-4xl text-center dark:text-white">Please Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[80%] mx-auto mt-8 space-y-5"
          >
            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <MdEmail className="text-2xl text-gray-700 dark:text-white" />
              <input
                className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full border-l-2 focus:outline-none dark:text-white"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <div className="px-5 py-2 flex items-center gap-3 border rounded-md">
              <FaLock className="text-2xl text-gray-700 dark:text-white" />
              <input
                className="bg-slate-50 dark:bg-zinc-700 px-5 py-2 w-full border-l-2 focus:outline-none dark:text-white"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <div>
              <input
                className="bg-red-700 hover:bg-red-800 duration-700 px-5 py-2 text-white rounded-md cursor-pointer"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
