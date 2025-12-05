
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";
import Header from "./Header.jsx";

const Browse = ()=>{

    useNowPlayingMovies();

    return(
        <div>
            <Header/>
        </div>
    )
}

export default Browse;