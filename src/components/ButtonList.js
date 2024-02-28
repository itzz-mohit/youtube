import React from "react";
import { Button } from "./index";

const ButtonList = () => {
  const bannerLists = [
    "All",
    "Mixex",
    "News",
    "Music",
    "JavaScript",
    "NEET",
    "Thrillers",
    "Debates",
    "Rajya Sabha",
    "Bhojpuri cinema",
    // "Seminars",
    // "Stocks",
    // "Recently Uploaded",
    // "Watched",
    // "New to you",
  ];
  return (
    <div className="flex flex-wrap items-center space-x-2 mb-4">
      {bannerLists.map((list, index) => (
        <Button key={index} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
