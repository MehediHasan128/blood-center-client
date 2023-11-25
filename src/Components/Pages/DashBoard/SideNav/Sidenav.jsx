"use client";
import { Navbar, Sidebar } from "keep-react";
import { NavLink } from "react-router-dom";
import logo from '../../../../assets/logo/logo.png';

const Sidenav = () => {

    const sideNavLinks = <>
        <NavLink
        to="/dashBoard/home"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105" : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashBoard/profile"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105" : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/dashBoard/my-donattion-request"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105" : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
        }
      >
        My Donation Request
      </NavLink>
      <NavLink
        to="/dashBoard/create-donation-request"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105" : "hover:bg-slate-200 px-10 py-2 rounded-md  duration-500 hover:scale-105"
        }
      >
        Donation Request
      </NavLink>
    </>

  return (
    <div>
      <div className="hidden lg:flex border-r h-screen">
        <Sidebar>
          
          <div className="flex items-center justify-center mb-10">
            <img className="w-20" src={logo} alt="" />
            <h1 className="text-3xl font-bold"><span className="text-red-600">Blood</span><br />Center</h1>
          </div>
          <Sidebar.Items className="px-5">
            <Sidebar.ItemGroup>
              <div className="flex flex-col space-y-3 text-xl font-medium">
              {sideNavLinks}
              </div>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <Navbar fluid={true}>
        <Navbar.Container className="flex items-center justify-end">
          <Navbar.Collapse collapseType="sidebar" className="bg-slate-100 w-[90%] md:w-[60%]">
            <Navbar.Container tag="ul" className="flex flex-col gap-5 text-lg font-medium">
              {sideNavLinks}
            </Navbar.Container>
          </Navbar.Collapse>

          <Navbar.Container className="flex items-center gap-3">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-5"
            ></Navbar.Container>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default Sidenav;
