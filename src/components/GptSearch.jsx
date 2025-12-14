import { useDispatch } from "react-redux";
import GptInputSearch from "./GptInputSearch.jsx";
import GptMoviesSuggestion from "./GptMoviesSuggestion.jsx";
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { SUPPORTED_LANGUAGES } from "../utils/constants.js";
import { changeLanguage } from "../utils/configSlice.js";

const GptSearch = () => {
  const dispatch = useDispatch();
  const handleGptSearchContainer = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black/40 backdrop-blur-md">
      <div className="bg-fuchsia-50 rounded-xl p-6 shadow-xl my-3 w-9/12 flex flex-col items-center relative">
        <div className="w-full">
          <select className="bg-gray-600 px-2 py-1 rounded-md text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => {
              return (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              );
            })}
          </select>
          <button
            className="absolute right-3 top-3 cursor-pointer sm:text-xl"
            onClick={handleGptSearchContainer}
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <GptInputSearch />
        <GptMoviesSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
