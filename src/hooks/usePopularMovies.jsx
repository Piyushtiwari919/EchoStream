import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import {addPopularMovies } from "../utils/moviesSlice.js";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
    // console.log(data);
  };
  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;