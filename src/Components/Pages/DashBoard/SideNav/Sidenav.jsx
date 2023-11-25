"use client";
import { Navbar, Sidebar } from "keep-react";
import { NavLink } from "react-router-dom";
import logo from '../../../../assets/logo/logo.png';

const Sidenav = () => {

    const sideNavLinks = <>
        <NavLink
        to="/dashBoard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105" : "hover:bg-slate-700 px-10 py-2 rounded-md hover:text-white duration-500 hover:scale-105"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/donerProfile"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105" : "hover:bg-slate-700 px-10 py-2 rounded-md hover:text-white duration-500 hover:scale-105"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/donationReq"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white bg-slate-700 px-10 py-2 rounded-md scale-105" : "hover:bg-slate-700 px-10 py-2 rounded-md hover:text-white duration-500 hover:scale-105"
        }
      >
        My Donation Request
      </NavLink>
    </>

  return (
    <div>
      <div className="hidden lg:flex w-fit border-r h-screen px-5">
        <Sidebar>
          <div className="flex items-center justify-center mb-10">
            <img className="w-20" src={logo} alt="" />
            <h1 className="text-3xl font-bold"><span className="text-red-600">Blood</span><br />Center</h1>
          </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <div className="flex flex-col space-y-6 text-xl font-medium">
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
