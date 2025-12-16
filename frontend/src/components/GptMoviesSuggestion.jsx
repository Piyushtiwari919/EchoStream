import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const GptMoviesSuggestion = ()=>{
    const movieData = useSelector((store)=> store.gpt);
    const {movieNames, geminiMovies} = movieData;
    return(
        <div>
            
        </div>
    )
}

export default GptMoviesSuggestion;