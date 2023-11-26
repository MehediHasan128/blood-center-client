"use client";
import { Navbar, Sidebar } from "keep-react";
import logo from '../../../../assets/logo/logo.png';
import NavItems from "./NavItems";

const Sidenav = () => {

  return (
    <div>
      <div className="hidden lg:flex fixed border-r h-screen">
        <Sidebar>
          
          <div>
          <div className="flex items-center justify-center mb-10">
            <img className="w-20" src={logo} alt="" />
            <h1 className="text-3xl font-bold"><span className="text-red-600">Blood</span><br />Center</h1>
          </div>
          <Sidebar.Items className="px-5">
            <Sidebar.ItemGroup>
              <div className="flex flex-col space-y-3 text-xl font-medium">
              <NavItems />
              </div>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
          </div>
        </Sidebar>
      </div>
      <Navbar fluid={true}>
        <Navbar.Container className="flex items-center">
          <Navbar.Collapse collapseType="sidebar" className="bg-slate-100 w-[80%] md:w-[60%]">
            <Navbar.Container tag="ul" className="flex flex-col gap-5 text-lg font-medium">
            <NavItems />
            </Navbar.Container>
          </Navbar.Collapse>

          <Navbar.Container className="flex items-center mt-5">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center"
            ></Navbar.Container>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default Sidenav;
