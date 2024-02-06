import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import image from "../../../assets/logo EMWA.png";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="mt-2 flex items-start justify-between sm:justify-center sm:mt-8 ">
        <div className=" inset-y-0 sm:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </div>
        <img
          className="w-16 h-16 pr-2 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
          src={image}
          alt="Family Legacy"
        />
      </div>

      <nav
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        }  border-b border-double border-gray-500 absolute z-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.2)] mt-4 h-36 py-2 sm:h-16`}
      >
        <div className=" mx-auto max-w-7xl px-2 sm:px-2 lg:px-8">
          <div className=" relative  h-16 items-center justify-between">
            <div className=" sm:flex sm:items-center justify-center">
              <div className="flex flex-col items-start space-y-0 sm:flex-row sm:space-x-2 sm:mt-4 md:space-x-3 lg:space-x-4  ">
                <a
                  href="#https://www.google.com"
                  className="text-white  rounded-md px-3 py-2 text-xs font-medium sm:text-xs md:text-sm lg:text-base"
                  aria-current="page"
                >
                  HOME
                </a>
                <a
                  href="#https://www.google.com"
                  className="text-white rounded-md px-3 py-2 text-xs sm:text-xs font-medium md:text-sm lg:text-base"
                  aria-current="page"
                >
                  SERVICES
                </a>
                <a
                  href="#https://www.google.com"
                  className="text-white rounded-md px-3 py-2 text-xs sm:text-xs font-medium md:text-sm lg:text-base"
                  aria-current="page"
                >
                  ABOUT US
                </a>

                <a
                  href="#https://www.google.com"
                  className="text-white rounded-md px-3 py-2 text-xs sm:text-xs font-medium md:text-sm lg:text-base"
                  aria-current="page"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 pl-8 text-xs flex flex-col ">
            <a
              href="#https://www.google.com"
              className="  text-black rounded-md px-2  text-sm font-medium"
              aria-current="page"
            >
              HOME
            </a>
            <a
              href="#https://www.google.com"
              className="  text-black rounded-md px-2  text-sm font-medium"
              aria-current="page"
            >
              OUR CLIENTS
            </a>
            <a
              href="#https://www.google.com"
              className="  text-black rounded-md px-2  text-sm font-medium"
              aria-current="page"
            >
              SERVICES
            </a>
            <a
              href="#https://www.google.com"
              className="  text-black rounded-md px-2  text-sm font-medium"
              aria-current="page"
            >
              ABOUT US
            </a>
            <a
              href="#https://www.google.com"
              className="  text-black rounded-md px-2 text-sm font-medium"
              aria-current="page"
            >
              RESOURCES
            </a>
            <a
              href="#https://www.google.com"
              className="  text-black rounded-md px-2  text-sm font-medium"
              aria-current="page"
            >
              CONTACT
            </a>
            <a
              href="#https://www.google.com"
              className="  text-black rounded-md px-2  text-sm font-medium"
              aria-current="page"
            >
              CLIENT ACCESS
            </a>
          </div>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
