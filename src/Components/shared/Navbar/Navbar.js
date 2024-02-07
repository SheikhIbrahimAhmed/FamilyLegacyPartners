import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import image from "../../../assets/logo EMWA.png";
const Navbar = ({ bgNavbar }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      // Set mobileMenuOpen to true on medium (md) screens and larger
      setMobileMenuOpen(window.innerWidth >= 768); // Adjust the breakpoint accordingly
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className=" flex items-start justify-between sm:justify-center">
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
        }  border-b border-double border-gray-500 absolute z-20 w-full ${bgNavbar}  lg:h-16 sm:h-12 sm:justify-center sm:items-center lg:items-center `}
      >
        <div className=" mx-auto max-w-7xl lg:px-8">
          <div className=" relative  h-32 items-center justify-between">
            <div className=" sm:flex sm:flex-col sm:items-center justify-center lg:items-center">
              <div className="flex flex-col justify-center mt-2  sm:flex-row sm:space-x-2  md:space-x-3 lg:space-x-4 lg:items-center">
                <a
                  href="#https://www.google.com"
                  className="text-white  rounded-md p-2 pb-1 text-xs font-normal leading-5 tracking-wider sm:text-xs md:text-sm lg:text-base  hover:bg-gray-900"
                  aria-current="page"
                >
                  HOME
                </a>
                <a
                  href="#https://www.google.com"
                  className="text-white  rounded-md p-2 pb-1 text-xs font-normal leading-5 tracking-wider sm:text-xs md:text-sm lg:text-base hover:bg-gray-900"
                  aria-current="page"
                >
                  SERVICES
                </a>
                <a
                  href="#https://www.google.com"
                  className="text-white  rounded-md p-2 pb-1 text-xs font-normal leading-5 tracking-wider sm:text-xs md:text-sm lg:text-base hover:bg-gray-900"
                  aria-current="page"
                >
                  ABOUT US
                </a>

                <a
                  href="#https://www.google.com"
                  className="text-white  rounded-md p-2 pb-1 text-xs font-normal leading-5 tracking-wider sm:text-xs md:text-sm lg:text-base hover:bg-gray-900"
                  aria-current="page"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
