import React from "react";

const VideoDetails = ({ details }) => {
  console.log(details);
  if (!details || !details.snippet || !details.statistics) {
    return <div>No data available</div>;
  }

  const { snippet, statistics } = details;
  const { title, channelTitle, localized, publishedAt } = snippet;
  const { likeCount, viewCount } = statistics;

  const formattedDate = publishedAt.slice(0, 10);
  return (
    <div>
      <div className="px-8 w-[66rem]">
        <h1 className="text-2xl font-bold my-4">{title}</h1>
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <p className="font-bold text-gray-800">{channelTitle}</p>
            <p className="text-sm text-gray-500">{`5.56M Subscribers`}</p>
          </div>
          <div className="ml-auto flex">
            <button className="bg-black text-white border border-gray-200 shadow-sm px-5 py-1 rounded-full mr-4">
              Subscribe
            </button>
            <button className="border flex border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full mr-4">
              {likeCount} Likes
            </button>
            <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full mr-4">
              Share
            </button>
            <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full mr-4">
              Download
            </button>
            <button className="border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full">
              ...
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 w-[66rem]">
        <div className="rounded-lg shadow-sm bg-gray-100 p-4">
          <p className="font-bold mb-2">{`${viewCount} Views 😎 ${formattedDate}`}</p>
          <p className="text-gray-800">{localized.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
