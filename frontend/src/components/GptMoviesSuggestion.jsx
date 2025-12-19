import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const GptMoviesSuggestion = () => {
  const movieData = useSelector((store) => store.gpt);
  const { movieNames, geminiMovies } = movieData;
  if (!movieNames) return;
  return (
    <div>
      {geminiMovies.map((movie, idx) => {
        return (
          <MovieList
            key={movie?.[0].id}
            title={movieNames[idx].title}
            movies={movie}
          />
        );
      })}
    </div>
  );
};

export default GptMoviesSuggestion;
