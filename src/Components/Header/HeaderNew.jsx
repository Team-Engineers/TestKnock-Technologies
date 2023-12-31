import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerAndMenu from "../Menu/BurgerAndMenu";

const HeaderNew = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
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
      className={`fixed top-0 left-0 w-full z-50 flex lg:h-[4vw] h-[70px] items-center justify-between px-4 py-2 logo-header ${
        isScrolled ? "bg-black" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <NavLink to="/">
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src="./logo_final.png"
              alt="Logo"
              className="max-h-[50px] max-w-[50px] px-4"
            />
          </div>
          <div className="text-white font-sans font-bold text-[150%] ml-[-13%]">
            <h2>TestKnock</h2>
          </div>
        </div>
      </NavLink>

      <div className="md:flex hidden">
        <nav className="flex space-x-10 px-10">
          <NavLink to="/" className="text-white whitespace-nowrap hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white whitespace-nowrap hover:text-gray-300">
            About
          </NavLink>
          <NavLink to="/team" className="text-white whitespace-nowrap hover:text-gray-300">
            Our Team
          </NavLink>
          <NavLink to="/offerings" className="text-white whitespace-nowrap hover:text-gray-300">
            Offerings
          </NavLink>
          <NavLink to="/contact" className="text-white whitespace-nowrap hover:text-gray-300">
            Contact
          </NavLink>
        </nav>
      </div>

      <div className="md:hidden flex ">
        <BurgerAndMenu />
      </div>
    </header>
  );
};

export default HeaderNew;
