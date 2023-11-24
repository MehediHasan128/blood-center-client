"use client";
import { Avatar, Dropdown, Navbar } from "keep-react";
import { CaretRight, SignOut, SquaresFour } from "phosphor-react";
import logo from ".././../../../assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoIosMoon, IoMdSunny } from "react-icons/io";
import { useEffect, useState } from "react";
import useAuthProvider from "../../../Hooks/useAuthProvider";

const NavBar = () => {
  const { user, userLogout } = useAuthProvider();

  const [icon, setIcon] = useState(false);
  const [mode, setMode] = useState("light");

  const handelChageMode = () => {
    const html = document.documentElement;

    if (mode == "light" && icon == false) {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      setIcon(true);
      localStorage.setItem("mode", "dark");
      localStorage.setItem("modeIcon", true);
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      setIcon(false);
      localStorage.setItem("mode", "light");
      localStorage.setItem("modeIcon", false);
    }
  };

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    const currentModeIcon = JSON.parse(localStorage.getItem("modeIcon"));
    setMode(currentMode);
    setIcon(currentModeIcon);
    const html = document.documentElement;
    html.classList.add(currentMode);
  }, []);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-700" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/donationRequest"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-700" : ""
        }
      >
        Donation Requests
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-700" : ""
        }
      >
        Blog
      </NavLink>
    </>
  );

  const handelLogout = () => {
    userLogout();
  };

  return (
    <div className="w-full lg:fixed z-[10] bg-white dark:bg-zinc-800 py-3 bg-opacity-50 dark:bg-opacity-50">
      <div className="container mx-auto">
        <Navbar className="bg-transparent" fluid={true}>
          <Navbar.Container className="flex items-center justify-between">
            <Navbar.Container className="flex items-center">
              <Link to="/">
                <div className="flex items-center">
                  <img className="w-12 md:w-16 lg:w-20" src={logo} alt="" />
                  <h1 className="text-xl lg:text-2xl">
                    <span className="font-bold text-red-700">Blood</span> <br />{" "}
                    <span className="font-medium dark:text-white">Center</span>
                  </h1>
                </div>
              </Link>
              <Navbar.Collapse
                collapseType="sidebar"
                className="bg-slate-100 dark:bg-zinc-700"
              >
                <Navbar.Container
                  tag="ul"
                  className="flex flex-col gap-5 font-medium dark:text-white"
                >
                  <li>
                    <div className="flex items-center bg-slate-200 dark:bg-zinc-600 p-1 rounded-full cursor-pointer">
                      <Avatar
                        className="w-9 h-9"
                        shape="circle"
                        statusPosition="bottom-left"
                        img={user?.photoURL}
                      />
                      <h1 className="text-xs ml-2">{user?.displayName}</h1>
                    </div>
                  </li>
                  {navLinks}
                  <li onClick={handelLogout} >Logout</li>
                </Navbar.Container>
              </Navbar.Collapse>
            </Navbar.Container>

            <div className="flex items-center gap-10">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8 dark:text-white text-lg font-semibold "
            >
              {navLinks}
            </Navbar.Container>

            <Navbar.Container className="flex gap-5 lg:gap-2">
              <div className="flex items-center gap-5">
                <div className="text-3xl lg:text-4xl">
                  {icon ? (
                    <IoMdSunny
                      IoIosMoon
                      className="cursor-pointer dark:text-white"
                      onClick={() => {
                        setIcon(icon);
                        handelChageMode();
                      }}
                    />
                  ) : (
                    <IoIosMoon
                      className="cursor-pointer"
                      onClick={() => {
                        setIcon(icon);
                        handelChageMode();
                      }}
                    />
                  )}
                </div>
                <div className="lg:flex hidden">
                  {user ? (
                    <>
                      <div className="flex items-center gap-2 bg-slate-200 dark:bg-zinc-600 p-2 rounded-full cursor-pointer">
                        <Avatar
                          className="w-12 h-12"
                          shape="circle"
                          statusPosition="bottom-left"
                          img={user?.photoURL}
                        />
                        <h1 className="text-xl font-medium dark:text-white">
                          {user?.displayName}
                        </h1>
                        <div>
                          <Dropdown
                            size="sm"
                            dismissOnClick={true}
                            placement="bottom-end"
                          >
                            <Dropdown.Item
                              icon={<SquaresFour size={20} color="#5E718D" />}
                            >
                              Dashboard
                              <span className="ml-auto">
                                <CaretRight size={20} color="#5E718D" />
                              </span>
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={handelLogout}
                              icon={<SignOut size={20} color="#5E718D" />}
                            >
                              Sign out
                              <span className="ml-auto">
                                <CaretRight size={20} color="#5E718D" />
                              </span>
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <button className="bg-red-700 hover:bg-red-800 duration-500 px-5 py-2 text-white rounded-md">
                          Login
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <Navbar.Toggle />
            </Navbar.Container>
            </div>
          </Navbar.Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
