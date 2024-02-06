import React from "react";
import "video-react/dist/video-react.css";
import video from "../../assets/video1.mp4";

const VideoPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full h-full sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-3/4">
        <video muted autoPlay src={video} controls></video>
      </div>
    </div>
  );
};

export default VideoPage;
