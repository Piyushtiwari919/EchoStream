import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";
import usePopularMovies from "../hooks/usePopularMovies.jsx";
import useTopRatedMovies from "../hooks/useTopRatedMovies.jsx";
import useUpcomingMovies from "../hooks/useUpcomingMovies.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

const Browse = ()=>{
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return(
        <>
            <MainContainer/>
            <SecondaryContainer/>
        </>
    )
}

export default Browse;