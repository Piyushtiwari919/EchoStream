import { useEffect } from "react";
import { IMG_CDN } from "../utils/constants.js";

const InterestedMovieCard = ({ movieInfo }) => {
  /* *To Prevent the background scrolling with the card is open */
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  if (!movieInfo) return;
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{movieInfo.title}</h2>
      <img
        alt={movieInfo.title}
        src={IMG_CDN + movieInfo.poster_path}
        className="rounded-lg mb-4 h-40"
      />
      <p className="mb-2">
        <strong>Release Date:</strong> {movieInfo.release_date}
      </p>
      <p className="mb-2">
        <strong>Rating:</strong> {movieInfo.vote_average.toFixed(1)}
      </p>
      <p className="text-justify">{movieInfo.overview}</p>
    </div>
  );
};

export default InterestedMovieCard;
