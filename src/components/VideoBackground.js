import React, { useEffect, useRef } from "react";

const VideoBackground = () => {
  const videoRef = useRef(null); 

  useEffect(() => {
    if (videoRef.current) {
      
      videoRef.current.playbackRate = 0.6; 
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src="/bgvideo.mp4"
      muted
      loop
      autoPlay
      playsInline
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        zIndex: -1,
        filter: "brightness(60%)",
      }}
    ></video>
  );
};

export default VideoBackground;
