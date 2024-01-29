import React from "react";
import "video-react/dist/video-react.css";
import video from "../../assets/video1.mp4";

const VideoPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full lg:w-1/2 h-3/4 lg:h-1/2">
        <video
          muted
          autoPlay
          src={video}
          width="750"
          height="500"
          controls
        ></video>
      </div>
    </div>
  );
};

export default VideoPage;
