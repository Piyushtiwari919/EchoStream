import { useDispatch } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import {
  addMovieInfo,
  toggleMovieVisiblity,
} from "../utils/interestedMovieSlice.js";

const MovieCard = ({ posterPath, movieTitle, movieInfo }) => {
  const dispatch = useDispatch();
  const handleCardClick = () => {
    dispatch(addMovieInfo(movieInfo));
    dispatch(toggleMovieVisiblity());
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleCardClick();
    }
  };

  if(!posterPath){
    return;
  }

  return (
    <div
      className="inline-block flex-none h-40 rounded-lg overflow-hidden shadow-md mr-4 bg-gray-100 snap-start"
      role="button"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <img
        alt={movieTitle}
        src={IMG_CDN + posterPath}
        className="rounded-lg h-full cursor-pointer"
      />
    </div>
  );
};

export default MovieCard;
