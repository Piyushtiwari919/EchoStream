import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const SecondaryContainer = ()=>{
    const movies = useSelector(store => store.movies);
    return(
        <div className=" bg-black">
            <div className="-mt-36 relative z-40">
            <MovieList title={"Now Playing"} movies={movies.nowPlaying}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;