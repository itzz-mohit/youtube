import React from "react";

const VideoCards = ({ infoData }) => {
  if (!infoData) {
    return <div>No data available</div>;
  }

  const { snippet, statistics } = infoData;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 h-96 bg-white shadow-md rounded-lg overflow-hidden">
      <img className="rounded-t-lg w-full" alt="thumbnail" src={thumbnails.medium.url} />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{channelTitle}</p>
        <p className="text-gray-500 text-sm">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCards;
