import React from "react";
import { ButtonAdvanced } from "./Buttons";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { navBarItems } from "./NavBar";


const navBarElements = navBarItems.map((i, index) => {
  if (index + 1 === navBarItems.length) {
    //this is the last navBar Item
    return (
      <div>
        <ButtonAdvanced
          text={i}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-black ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          }
          isDark={false}
        />
      </div>
    );
  } else {
    return (
        <NavLink
          to={i.toLowerCase() === "home" ? "/" : i.toLowerCase()}
          className={({ isActive }) =>
            isActive ? "bottom-nav-bar-item" : "bottom-nav-bar-item-inactive"
          }
        >
          <p key={index}>{i}</p>
        </NavLink>
    );
  }
});

function BottomNavBar() {
  return (
    <div className="w-full mt-2 bg-gradient-to-br from-black to-gray-800 rounded-t-2xl rounded-b-none py-8 px-8">
      <div className="flex justify-end items-center">{navBarElements}</div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center my-14 max-w-[700px] max-h-[500px">
          <img src={Logo} alt="Company Logo" className="w-[150px] rounded-lg" />
          <p className="text-white text-lg font-casual font-medium text-center ml-4">
            Dwealthy Space is a marketing, business development, representative
            for Fintech companies, products and sales in Africa and globally.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center text-white font-casual font-light text-sm">
        <span>Copyright 2022 The Stone Church, Agugu. All Rights Reserved</span>
        <span className="mt-4 md:mt-0">
          Made by{" "}
          <a
            href="https://laolu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-50"
          >
            Laolu
          </a>
        </span>
      </div>
    </div>
  );
}

export default BottomNavBar;
