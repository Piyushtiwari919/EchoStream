import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground.jsx";
import VideoTitle from "./VideoTitle.jsx";

const MainContainer = ()=>{
    const movies = useSelector(store => store.movies?.nowPlaying);
    if(movies === null || movies.length === 0) return;
    const mainMovie = movies[0];
    const {original_title , id, overview} = mainMovie;
    console.log(mainMovie);

    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;