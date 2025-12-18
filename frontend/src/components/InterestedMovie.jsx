import { useDispatch, useSelector } from "react-redux";
import {
  removeMovieInfo,
  toggleMovieVisiblity,
} from "../utils/interestedMovieSlice.js";
import InterestedMovieCard from "./InterestedMovieCard.jsx";

const InterestedMovie = () => {
  const dispatch = useDispatch();
  const handleInterestedMovieCard = () => {
    dispatch(toggleMovieVisiblity());
    dispatch(removeMovieInfo());
  };

  const movieInfo = useSelector((store) => store.interestedMovie.movieInfo);
  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black/40 backdrop-blur-md">
      <div
        className="bg-fuchsia-50 rounded-xl p-6 shadow-xl my-6 w-full 
        md:w-3/5 lg:w-1/2 flex flex-col items-center relative max-h-[90vh]
        overflow-y-auto overscroll-contain"
      >
        <div className="w-full">
          <button
            className="absolute right-3 top-3 cursor-pointer sm:text-xl"
            onClick={handleInterestedMovieCard}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <InterestedMovieCard movieInfo={movieInfo} />
      </div>
    </div>
  );
};

export default InterestedMovie;
