import { useSelector } from "react-redux";
import lang from "../utils/languageConstants.js";
import { useRef } from "react";
const GptInputSearch = () => {
  const searchInput = useRef(null);
  const language = useSelector((store) => store.config.language);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleGptSearch = async () => {
    if (searchInput.current.value == "") return;
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        ref={searchInput}
        type="text"
        name="queryInput"
        placeholder={lang[language].GptSearchPlaceholder}
        className="m-2 pl-2 py-2 border-2 border-black rounded-md w-3/4"
      />
      <button
        className="bg-red-600 p-2 text-white m-2 font-bold rounded-md cursor-pointer"
        onClick={handleGptSearch}
      >
        {lang[language].search}
      </button>
    </form>
  );
};

export default GptInputSearch;
