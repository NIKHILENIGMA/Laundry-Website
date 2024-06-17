import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "../Button";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between w-full mx-auto border-b-2 h-14">
      <div className="flex items-center h-full w-[20%] justify-center text-lg">
        <NavLink to="/">Logo</NavLink>
      </div>
      <div className="hidden w-1/2 h-full md:flex">
        <div className="flex items-center justify-center w-[70%] gap-7 text-lg">
          <NavLink to="services">Services</NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="about">About Us</NavLink>
        </div>
        <div className="hidden md:flex items-center justify-center w-[30%]">
          <Button size="xs" shape="rounded" className="text-white bg-black ">
            User Account
          </Button>
        </div>
      </div>
      <div className="flex md:hidden">
        <Button onClick={toggleMobileMenu} className="p-2">
          {isMobileMenuOpen ? (
            <IoCloseOutline color="black" size={24} />
          ) : (
            <AiOutlineMenu color="black" size={24} />
          )}
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute z-10 left-0 flex flex-col w-full h-[70%] bg-white top-14 md:hidden">
          <ul className="flex flex-col items-center h-[55%] gap-5 text-xl mt-3">
            <li className="mt-5">
              <NavLink to="services" onClick={toggleMobileMenu}>
                Services
              </NavLink>
            </li>
            <li className="mt-5">
              <NavLink to="pricing" onClick={toggleMobileMenu}>
                Prices
              </NavLink>
            </li>
            <li className="mt-5">
              <NavLink to="about" onClick={toggleMobileMenu}>
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center">
            <Button size="xs" shape="rounded" className="text-white bg-black ">
              User Account
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export { Header };
