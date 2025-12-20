import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice.js";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    {
      !topRatedMovies &&getTopRatedMovies();
    }
  }, []);
};

export default useTopRatedMovies;