import MovieCard from "./MovieCard.jsx";
import { useRef } from "react";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies || movies.length === 0) return;

  const scrollerRef = useRef(null);

  function scrollBy(amount) {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  }

  function onKeyDown(e) {
    if (e.key === "ArrowRight") scrollByAmount(200);
    if (e.key === "ArrowLeft") scrollByAmount(-200);
  }
  return (
    <div className="">
      <h1 className="text-4xl m-4 font-bold">{title}</h1>
      <div className="relative">
        <button
          aria-label="Scroll left"
          onClick={() => scrollBy(-300)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow hover:bg-white"
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scrollBy(300)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow hover:bg-white"
        >
          <i class="fa-solid fa-angle-right"></i>
        </button>
        <div
          ref={scrollerRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="overflow-x-auto overflow-y-hidden whitespace-nowrap snap-x snap-mandatory hide-scrollbar p-4 selection:none ml-2"
        >
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
    </div>
  );
};

export default MovieList;
