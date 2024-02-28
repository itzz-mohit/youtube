import React from "react";

const SearchedList = ({ userSearchData }) => {
  if (!userSearchData || !userSearchData.snippet) {
    return <div>No data available</div>;
  }

  console.log(userSearchData);

  const { snippet } = userSearchData;
  const { title, thumbnails, description, channelTitle, publishedAt } = snippet;
  return (
    <div className="flex mr-56 ml-14 shadow-lg my-5 px-10 bg-white rounded-md overflow-hidden">
      <div className="w-3/2 p-5">
        <img
          className="h-50 w-full rounded-lg object-cover"
          src={thumbnails.medium.url}
          alt={title}
        />
      </div>
      <div className="w-1/2 p-5">
        <div className="font-bold text-xl mb-2">{title}</div>
        <h4 className="text-sm font-semibold text-gray-700">
          <span className="font-bold">{channelTitle}</span>{" "}
          <span className="text-gray-500">
            {new Date(publishedAt).toLocaleDateString()}
          </span>
        </h4>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default SearchedList;
