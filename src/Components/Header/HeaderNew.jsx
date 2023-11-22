import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderNew = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 logo-header ${
        isScrolled ? "bg-black" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center ">
        <div className="mr-4">
         <a href="/"> <img
            src="./logo01.png"
            alt="Logo"
            className="max-h-[90px] max-w-[150px] px-5" 
          />
          </a>
        </div> 
        </div>
        <div>
        <nav className="flex space-x-10 px-10">
          <NavLink to="/" className="text-white hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-300">
            About
          </NavLink>
          <NavLink to="/team" className="text-white hover:text-gray-300">
            Team
          </NavLink>
          <NavLink to="/offerings" className="text-white hover:text-gray-300">
            Offerings
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-300">
            Contact
          </NavLink>
        </nav>
        </div>
    </header>

  );
};

export default HeaderNew;
