"use client";
import { Navbar } from "keep-react";
import logo from ".././../../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {

    const navLinks = <>
        <li></li>
    </>

  return (
    <div className="py-3">
      <Navbar className="container mx-auto" fluid={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <div className="flex items-center">
              <img className="w-12 md:w-16 lg:w-20" src={logo} alt="" />
              <h1>
                Blood <br /> Center
              </h1>
            </div>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                <Navbar.Link linkName="Home" />
                <Navbar.Link linkName="Projects" />
                <Navbar.Link linkName="Blogs" />
                <Navbar.Link linkName="News" />
                <Navbar.Link linkName="Resources" />
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2">
            <div className="lg:flex hidden">
              <button className="bg-red-700 hover:bg-red-800 duration-500 px-5 py-2 text-white rounded-md">
                <Link>Login</Link>
              </button>
            </div>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
