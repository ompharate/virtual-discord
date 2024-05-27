import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const DashBoard = () => {
  const { user } = useSelector((state) => state.user); // fetch data from redux-toolkit
  console.log(user._id);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/user/${user._id}`).then((response) => {
      console.log(response.data.user._id);
    });
  });

  return (
    <div>
      hello {user.name}
      <NavLink to={"/settings"}>Settings</NavLink>
    </div>
  );
};

export default DashBoard;
