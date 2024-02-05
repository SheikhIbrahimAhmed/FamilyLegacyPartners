import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="flex items-center border-b border-double border-gray-500 absolute z-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.2)] mt-6 h-16 lg:h-12">
      <div className="mx-auto max-w-7xl px-2 sm:px-2 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>

          <div className="hidden sm:flex sm:items-center justify-center">
            <div className="flex flex-col sm:flex-row space-x-4">
              <a
                href="#https://www.google.com"
                className="text-white rounded-md px-3 py-2 text-xs sm:text-base font-medium"
                aria-current="page"
              >
                HOME
              </a>
              <a
                href="#https://www.google.com"
                className="text-white rounded-md px-3 py-2 text-xs sm:text-base font-medium"
                aria-current="page"
              >
                OUR CLIENTS
              </a>
              <a
                href="#https://www.google.com"
                className="text-white rounded-md px-3 py-2 text-xs sm:text-base font-medium"
                aria-current="page"
              >
                SERVICES
              </a>
              <a
                href="#https://www.google.com"
                className="text-white rounded-md px-3 py-2 text-xs sm:text-base font-medium"
                aria-current="page"
              >
                ABOUT US
              </a>
              <a
                href="#https://www.google.com"
                className="text-white rounded-md px-3 py-2 text-xs sm:text-base font-medium"
                aria-current="page"
              >
                RESOURCES
              </a>
              <a
                href="#https://www.google.com"
                className="text-white rounded-md px-3 py-2 text-xs sm:text-base font-medium"
                aria-current="page"
              >
                CONTACT
              </a>
              <a
                href="#https://www.google.com"
                className="text-white rounded-md px-3 py-2 text-xs sm:text-base font-medium"
                aria-current="page"
              >
                CLIENT ACCESS
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:flex sm:items-center ">
          <a
            href="#https://www.google.com"
            className="  text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#https://www.google.com"
            className="  text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            OUR CLIENTS
          </a>
          <a
            href="#https://www.google.com"
            className="  text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            SERVICES
          </a>
          <a
            href="#https://www.google.com"
            className="  text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            ABOUT US
          </a>
          <a
            href="#https://www.google.com"
            className="  text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            RESOURCES
          </a>
          <a
            href="#https://www.google.com"
            className="  text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            CONTACT
          </a>
          <a
            href="#https://www.google.com"
            className="  text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            CLIENT ACCESS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
