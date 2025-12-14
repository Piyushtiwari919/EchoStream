import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { auth } from "../utils/firebase.config.js";
import lang from "../utils/languageConstants.js";
import { useNavigate } from "react-router-dom";
const GptInputSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchInput = useRef(null);
  const navigate = useNavigate();
  const language = useSelector((store) => store.config.language);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleGptSearch = async () => {
      if (!auth.currentUser){
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
          'Authorization': `Bearer ${idToken}`
        },
        body: JSON.stringify({ movieQuery: query }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
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
