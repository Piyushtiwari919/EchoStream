import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { auth } from "../utils/firebase.config.js";
import lang from "../utils/languageConstants.js";
import { useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants.js";
import { addGeminiMovieResult } from "../utils/gptSlice.js";
const GptInputSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchInput = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.language);

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await response.json();
      if (!json) {
        throw new Error("Do not get movie resonse from TMBD API");
      }
      return json.results;
    } catch (error) {
      setError("Error: ", error);
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleGptSearch = async () => {
    if (!auth.currentUser) {
      navigate("/");
      return;
    }
    if (searchInput.current.value == "" || !searchInput.current.value) return;
    const query = searchInput.current.value;
    setLoading(true);
    try {
      const idToken = await auth.currentUser.getIdToken();
      const response = await fetch("http://localhost:5000/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ movieQuery: query }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (!data) {
        throw new Error("Gemini Response is empty");
      }

      const geminiMovies = data?.recommendations?.results;
      const promiseArray = geminiMovies.map((movie) =>
        searchMovieTMDB(movie.title)
      );
      const tmdbMovieData = await Promise.all(promiseArray);
      dispatch(addGeminiMovieResult({movieNames:geminiMovies,tmdbMovieData}));
      console.log(tmdbMovieData);
      if (!geminiMovies) {
        throw new Error("Gemini Response Error");
      }
      console.log(geminiMovies);
    } catch (error) {
      setError("Error: " + error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        ref={searchInput}
        type="text"
        name="queryInput"
        placeholder={lang[language].GptSearchPlaceholder}
        className="m-2 pl-2 py-2 border-2 border-black rounded-md w-3/4"
        disabled={loading}
      />
      <button
        className="bg-red-600 p-2 text-white m-2 font-bold rounded-md cursor-pointer"
        onClick={handleGptSearch}
      >
        {loading ? "Thinking...." : lang[language].search}
      </button>
    </form>
  );
};

export default GptInputSearch;
