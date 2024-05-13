import React from "react";
import { NavLink } from "react-router-dom";

function Footer(): React.ReactElement {
  return (
    <footer className=" shadow-md bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <p className="m-2 text-sm text-text sm:text-center">
          © 2024 Core Force Fitness All Rights Reserved.
        </p>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li>
            <NavLink to="/" className="hover:underline me-4 md:me-6">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:underline me-4 md:me-6">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className="hover:underline me-4 md:me-6">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="gallery" className="hover:underline me-4 md:me-6">
              Gallery
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
