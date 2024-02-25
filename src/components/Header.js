import React from "react";
import { HAMBURGER_MENU, YOUTUBE_LOGO, USER_ICON } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../features/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => handleToggle()}
          className="h-8 cursor-pointer"
          src={HAMBURGER_MENU}
        />
        <img className="h-7 mx-2" src={YOUTUBE_LOGO} />
      </div>
      <div className="col-span-10 px-28">
        <input
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="rounded-r-full border border-gray-400 bg-gray-100 px-5 py-2">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
