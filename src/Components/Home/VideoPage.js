import React from "react";
import "video-react/dist/video-react.css";
import video from "../../assets/Video1.mp4";

const VideoPage = () => {
  return (
    <div className="flex h-80 mt-16 lg:mb-56 justify-center items-center ">
      <div className="w-full h-96 sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-3/4 xl:h-full">
        <video muted autoPlay src={video} controls></video>
      </div>
    </div>
  );
};

export default VideoPage;
