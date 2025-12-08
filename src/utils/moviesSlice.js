import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlaying = action.payload;
        },
        removeNowPlayingMovies:(state,action)=>{
            state.nowPlaying = null;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies,removeNowPlayingMovies, addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;