import {useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useGetTrailer(movieId);

  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full border-0"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=3VlPqiF_7jdcCJxp&autoplay=1&mute=1&autohide=2`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
