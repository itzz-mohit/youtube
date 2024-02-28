import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuVisible = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuVisible) return null;

  return (
    <div className="p-5 shadow-lg w-48 bg-white">
      <ul className="mb-4">
        <li className="text-gray-800 font-bold mb-2">Home</li>
        <li className="text-gray-700 hover:underline cursor-pointer">Shorts</li>
        <li className="text-gray-700 hover:underline cursor-pointer">
          Subscriptions
        </li>
      </ul>
      <div>
        <h1 className="font-bold mb-2 text-gray-800">You</h1>
        <ul className="mb-4">
          <li className="text-gray-700 hover:underline cursor-pointer">
            Your Channel
          </li>
          <li className="text-gray-700 hover:underline cursor-pointer">
            History
          </li>
          <li className="text-gray-700 hover:underline cursor-pointer">
            Your Videos
          </li>
          <li className="text-gray-700 hover:underline cursor-pointer">
            Watch Later
          </li>
        </ul>
        <h1 className="font-bold mb-2 text-gray-800">Explore</h1>
        <ul>
          <li className="text-gray-700 hover:underline cursor-pointer">
            Trending
          </li>
          <li className="text-gray-700 hover:underline cursor-pointer">
            Shopping
          </li>
          <li className="text-gray-700 hover:underline cursor-pointer">
            Music
          </li>
          <li className="text-gray-700 hover:underline cursor-pointer">
            Movies
          </li>
          <li className="text-gray-700 hover:underline cursor-pointer">Live</li>
          <li className="text-gray-700 hover:underline cursor-pointer">
            Gaming
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
