import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-red-500">
      <h1>Home Page</h1>
      <NavLink to={"/signup"}>signup</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
};

export default Home;
