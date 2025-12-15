import { useSelector } from "react-redux";

const GptMoviesSuggestion = ()=>{
    const movieData = useSelector((store)=> store.gpt.geminiMovies);
    return(
        <div></div>
    )
}

export default GptMoviesSuggestion;