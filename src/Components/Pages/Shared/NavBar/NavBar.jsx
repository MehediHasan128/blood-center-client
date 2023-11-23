"use client";
import { Navbar } from "keep-react";
import logo from ".././../../../assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoIosMoon, IoMdSunny } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {

  const [icon, setIcon] = useState(false)
  const [mode, setMode] = useState('light');


  const handelChageMode = () =>{
    const html = document.documentElement

    if(mode == 'light'){
      html.classList.remove('light')
      html.classList.add('dark')
      setMode('dark')
    }
    else{
      html.classList.remove('dark')
      html.classList.add('light')
      setMode('light')
    }
  }

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

  return (
    <div className="py-3">
      <Navbar className="container mx-auto dark:bg-zinc-800" fluid={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <div className="flex items-center">
              <img className="w-12 md:w-16 lg:w-20" src={logo} alt="" />
              <h1 className="text-xl lg:text-2xl">
                <span className="font-bold text-red-700">Blood</span> <br /> <span className="font-medium dark:text-white">Center</span>
              </h1>
            </div>
            <Navbar.Collapse collapseType="sidebar" className="bg-slate-100 dark:bg-zinc-700">
              <Navbar.Container tag="ul" className="flex flex-col gap-5 font-medium dark:text-white">
                {navLinks}
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8 dark:text-white text-lg font-semibold"
          >
            {navLinks}
          </Navbar.Container>

          <Navbar.Container className="flex gap-5 lg:gap-2">
            <div className="flex items-center gap-5">
            <div className="text-3xl lg:text-4xl">
            {
                    icon ? 
                    <IoMdSunny className="cursor-pointer dark:text-white" onClick={() => {
                      setIcon(!icon)
                    handelChageMode()
                  }} /> : 
                    <IoIosMoon className="cursor-pointer" onClick={() => {
                      setIcon(!icon)
                    handelChageMode()
                  }} />
            }
            </div>
            <div className="lg:flex hidden">
              <button className="bg-red-700 hover:bg-red-800 duration-500 px-5 py-2 text-white rounded-md">
                <Link>Login</Link>
              </button>
            </div>
            </div>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
