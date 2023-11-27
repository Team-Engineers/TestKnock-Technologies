import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerAndMenu from "../Menu/BurgerAndMenu";

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
      className={`fixed top-0 left-0 w-full z-50 flex max-lg:h-[9vh] items-center justify-between px-4 py-2 logo-header ${
        isScrolled ? "bg-black" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center ">
        <div className="mr-4">
         <NavLink to="/"> <img
            src="./logo_04.png"
            alt="Logo"
            className="max-h-[100px] max-w-[100px] px-4" 
          />
          </NavLink>
        </div>
        <div className="text-yellow-100 font-sans font-bold text-[150%] ml-[-13%]" >
          <h2 >TestKnock</h2>
          </div> 
        </div>
        <div className="md:flex hidden">
        <nav className="flex space-x-10 px-10">
          <NavLink to="/" className="text-white hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-300">
            About
          </NavLink>
          <NavLink to="/team" className="text-white hover:text-gray-300">
            Our Team
          </NavLink>
          <NavLink to="/offering" className="text-white hover:text-gray-300">
            Offerings
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-300">
            Contact
          </NavLink>
        </nav>
        </div>

        <div className="md:hidden flex ">
          <BurgerAndMenu/>
        </div>
    </header>

  );
};

export default HeaderNew;
