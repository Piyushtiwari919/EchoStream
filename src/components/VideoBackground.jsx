import {useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useGetTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-100% aspect-video"
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?si=3VlPqiF_7jdcCJxp&autoplay=1&mute=1&autohide=2"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
