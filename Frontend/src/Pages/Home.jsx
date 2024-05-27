import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeCSS from "./Stylesheets/Home.module.css";
import map from "../Images/map.png";
import logo from "../Images/logo.png";

const Home = () => {
  return (
    <>
      <div className="bg-[#0d1026]">
        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap px-10 py-[-10px] flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={logo} alt="" className="w-[150px] " />
              <span class="ml-3 text-xl">Tailblocks</span>
            </a>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 text-white text-[17px] font-semibold hover:text-gray-900">
                First Link
              </a>
              <a class="mr-5 text-white text-[17px] font-semibold hover:text-gray-900">
                Second Link
              </a>
              <a class="mr-5 text-white text-[17px] font-semibold hover:text-gray-900">
                Third Link
              </a>
              <a class="mr-5 text-white text-[17px] font-semibold hover:text-gray-900">
                Fourth Link
              </a>
            </nav>
            <button class="inline-flex items-center shadow-[1px_1px_10px_1px_rgb(17,_208,_250)]  bg-gradient-to-r text-white from-custom-blue-start to-custom-blue-end border-0 py-2 px-4 font-semibold focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
        <div className="mt-8">
          <div className=" absolute container">
            <h1 className="text-[40px] font-bold text-center uppercase [text-shadow:1px_1px_2px_var(--tw-shadow-color)] text-[#a2a2a2] leading-[60px] pt-[50px]">
              Join the Quest,
              <br />
              <span className="text-[#e3e3e3] text-[50px] drop-shadow-[0px_0px_30px_var(--tw-shadow-color)] shadow-[hsl(191,96%,52%)]">
                Connect with Friends
              </span>
            </h1>
          </div>
          <img src={map} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;

/*
// <div className="text-red-500">
    //   <h1>Home Page</h1>
    //   <NavLink to={"/signup"}>signup</NavLink>
    //   <NavLink to={"/login"}>Login</NavLink>
    // </div>
*/
