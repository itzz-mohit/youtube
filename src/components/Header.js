import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../features/appSlice";
import { getSearchText } from "../features/searchSlice";
import {
  HAMBURGER_MENU,
  YOUTUBE_LOGO,
  USER_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchText(searchData));
    setSearchData("");
  };

  //console.log(searchData);
  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    getSearchData();
  }, [searchData]);

  //console.log("the suggestion " + suggestions);

  const getSearchData = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchData);
    const data = await response.json();
    //console.log(data[1]);
    setSuggestions(data[1]);
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex col-span-1">
        <img
          onClick={handleToggle}
          className="h-8 cursor-pointer"
          src={HAMBURGER_MENU}
          alt="Menu"
        />
        <img className="h-7 mx-2" src={YOUTUBE_LOGO} alt="YouTube Logo" />
      </div>
      <div className="col-span-10 px-28">
        <div className="flex items-center">
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-r-full border border-gray-400 bg-gray-100 px-5 py-2"
          >
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[29rem] shadow-lg rounded-lg border border-gray-100 mt-1">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="User Icon" />
      </div>
    </div>
  );
};

export default Header;
