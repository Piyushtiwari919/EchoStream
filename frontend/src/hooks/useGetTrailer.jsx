import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice.js";
const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json?.results.filter((video) => {
      return video.type.includes("Trailer");
    });
    //Single Movie can have one or more trailer(s) or there is no trailer
    const movieTrailer = filteredData.length
      ? filteredData[0]
      : json?.results[0];
    dispatch(addTrailerVideo(movieTrailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useGetTrailer;
