import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const SecondaryContainer = ()=>{
    const movies = useSelector(store => store.movies);
    return(
        <div>
            <MovieList title={"Now Playing"} movies={movies.nowPlaying}/>
            <MovieList title={"Popular"} movies={movies.nowPlaying}/>
            <MovieList title={"Top Rated"} movies={movies.nowPlaying}/>
            <MovieList title={"Upcoming"} movies={movies.nowPlaying}/>
        </div>
    )
}

export default SecondaryContainer;