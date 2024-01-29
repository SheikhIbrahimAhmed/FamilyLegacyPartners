import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';


const VideoPage = () => {
  const videoSource = "/src/assets/video1.mp4";

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full lg:w-1/2 h-3/4 lg:h-1/2">
        <Player playsInline src={videoSource}>
          <source src={videoSource} type="video/mp4" />
        </Player>
      </div>
    </div>
  );
};

export default VideoPage;
