import { useSelector } from "react-redux";
import lang from "../utils/languageConstants.js";
const GptInputSearch = () => {
    const language = useSelector((store)=> store.config.language);
    const handleSubmit = (e)=>{
        e.preventDefault();
    }  
    return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="queryInput"
        placeholder={lang[language].GptSearchPlaceholder}
        className="m-2 pl-2 py-2 border-2 border-black rounded-md w-3/4"
      />
      <button className="bg-red-600 p-2 text-white m-2 font-bold rounded-md cursor-pointer">
        {lang[language].search}
      </button>
    </form>
  );
};

export default GptInputSearch;
