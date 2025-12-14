import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";
import usePopularMovies from "../hooks/usePopularMovies.jsx";
import useTopRatedMovies from "../hooks/useTopRatedMovies.jsx";
import useUpcomingMovies from "../hooks/useUpcomingMovies.jsx";
import GptSearch from "./GptSearch.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import { Activity } from "react";

const Browse = ()=>{
    const gptSeacrchVisibility = useSelector((store)=> store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return(
        <>
            <Activity mode={gptSeacrchVisibility ? 'visible' : 'hidden'} >
                <GptSearch/>
            </Activity>
            <MainContainer/>
            <SecondaryContainer/>
        </>
    )
}

export default Browse;