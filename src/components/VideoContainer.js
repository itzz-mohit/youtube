import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { SearchedList, VideoCards } from "./index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [searchedVideo, setSearchedVideo] = useState([]);
  const [showCards, setShowCards] = useState(true);

  const searchText = useSelector((state) => state.search.text);
  console.log(searchText);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    // console.log(data.items);
    setVideoList(data.items);
  };

  const getSearchedVideos = async (Text) => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${Text}&key=AIzaSyCk_cBmGlYvyz_ImU27VttBM3lednrGu5w`
    );
    const data = await response.json();
    //console.log(data.items);
    setSearchedVideo(data.items);
    setShowCards(false);
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (searchText !== "") {
      getSearchedVideos(searchText);
    } else {
      setShowCards(true);
    }
  }, [searchText]);

  return (
    <>
      {!showCards &&
        searchedVideo &&
        searchedVideo.map((userSearch) => (
          <Link
            to={"/watch?v=" + userSearch.id.videoId}
            key={userSearch.id.videoId}
          >
            <SearchedList
              userSearchData={userSearch}
              key={userSearch.id.videoId}
            />
          </Link>
        ))}

      <div className="flex flex-wrap mx-auto">
        {showCards &&
          videoList.map((video) => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCards infoData={video} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default VideoContainer;
