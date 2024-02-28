import React from "react";
import { SideBar } from "./index";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex my-20">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
