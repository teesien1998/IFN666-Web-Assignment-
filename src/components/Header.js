import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

// Header Component
function Header() {
  // State to handle the visibility of the mobile navigation menu
  const [toggle, setToggle] = useState(false);

  // Function to toggle the mobile navigation menu
  const handleToggle = () => setToggle(!toggle);

  const activeStyle = {
    fontWeight: "bold",

    color: "#7477ff",
  };

  return (
    <header className="flex justify-between px-5 py-2 text-black fixed w-full z-10 bg-white box--shadowheader">
      <div>
        <a href="/" className="flex items-center">
          <img src="./logo-page.png" alt="Logo" className="icon--logo" />
          <span className="text-xl font-bold font--header ml-2">
            SLPortfolio
          </span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center w-full">
        <ul className="flex ul-list font-madimi">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blogs">Blogs</a>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={
          !toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0 mt-4"
        }
      >
        <ul className="flex flex-col mt-2">
          <li>
            <a href="/#about" className="">
              About
            </a>
          </li>
          <li>
            <NavLink to="/project">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button for mobile navigation */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
}

export default Header;
