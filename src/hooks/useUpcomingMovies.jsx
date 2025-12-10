import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice.js";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addUpcomingMovies(data.results));
    // console.log(data);
  };
  useEffect(() => {
    topRatedMovies();
  }, []);
};

export default useUpcomingMovies;