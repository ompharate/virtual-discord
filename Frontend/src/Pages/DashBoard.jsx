import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const DashBoard = () => {
  const { user } = useSelector((state) => state.user);

  console.log(user);
  return (
    <div>
      hello {user.name}
      <NavLink to={"/settings"}>Settings</NavLink>
    </div>
  );
};

export default DashBoard;
