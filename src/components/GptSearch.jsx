import GptInputSearch from "./GptInputSearch.jsx";
import GptMoviesSuggestion from "./GptMoviesSuggestion.jsx";

const GptSearch = ()=>{
    return(
        <div className="fixed inset-0 z-50 flex justify-center bg-black/40 backdrop-blur-md">
            <div className="bg-fuchsia-50 rounded-xl p-6 shadow-xl my-3 relative w-9/12 flex justify-center">
                <GptInputSearch/>
                <GptMoviesSuggestion/>
            </div>
        </div>
        
    )
}

export default GptSearch;