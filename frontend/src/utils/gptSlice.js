import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch:false,
        movieNames:null,
        geminiMovies:null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGeminiMovieResult:(state,action)=>{
            const {movieNames, tmdbMovieData} = action.payload;
            state.geminiMovies = tmdbMovieData;
            state.movieNames = movieNames;
        }
    },
});

export const { toggleGptSearchView, addGeminiMovieResult } = gptSlice.actions;
export default gptSlice.reducer;