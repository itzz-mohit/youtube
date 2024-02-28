import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../features/appSlice";
import { YOUTUBE_VIDEO_BYID } from "../utils/constants";
import {VideoDetails} from "./index";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [videoInfo, setVideoInfo] = useState([]);
  const VIDEO_DETAILS = YOUTUBE_VIDEO_BYID + searchParams.get("v");

  //console.log("this is the video info :-", videoInfo);

  const getVideoDetails = async () => {
    try {
      const response = await fetch(VIDEO_DETAILS);
      const data = await response.json();
      //console.log(data.items[0]);
      setVideoInfo(data.items[0]);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);

  return (
    <div className="flex flex-col w-full mt-5">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div>
        <VideoDetails details={videoInfo}/>
      </div>
    </div>
  );
};

export default WatchVideo;
