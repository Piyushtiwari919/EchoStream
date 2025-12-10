import MovieCard from "./MovieCard.jsx";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies || movies.length === 0) return;
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl m-4 font-bold">{title}</h1>
      <div className="flex flex-wrap m-4 gap-2 items-center justify-center">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movieTitle={movie.original_title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
