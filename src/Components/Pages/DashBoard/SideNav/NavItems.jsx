import { NavLink } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import { IoIosLogOut } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import useAuthProvider from "../../../Hooks/useAuthProvider";

const NavItems = () => {
  const [isAdmin] = useAdmin();
  const {userLogout} = useAuthProvider();

  const handelLogout = () =>{
    userLogout();
  }

  return (
    <>
      {(isAdmin) ? (
        <>
          <NavLink
            to="/dashBoard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105"
                : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashBoard/profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105"
                : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashBoard/all-users"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105"
                : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
            }
          >
            All Users
          </NavLink>
          <NavLink
            to="/dashBoard/all-blood-donation-request"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105"
                : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
            }
          >
            All Donation Request
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to="/dashBoard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105"
                : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashBoard/profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105"
                : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashBoard/my-donattion-request"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105"
                : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
            }
          >
            My Donation Request
          </NavLink>
          <NavLink
            to="/dashBoard/create-donation-request"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105"
                : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
            }
          >
            Donation Request
          </NavLink>
        </>
      )}

      <div className="border">
        <hr />
      </div>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105"
                : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105 flex items-center gap-3"
            }
          >
            <IoHome className="text-2xl" />
            Back To Home
        </NavLink>
        <button onClick={handelLogout} className="flex items-center gap-3 hover:bg-slate-200 px-10 py-2 rounded-md text-left duration-500 hover:scale-105">
            Logout
            <IoIosLogOut className="text-3xl" />
        </button>

    </>
  );
};

export default NavItems;
