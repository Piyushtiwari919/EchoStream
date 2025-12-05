import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlaying = action.payload;
        },
        removeNowPlayingMovies:(state,action)=>{
            state.nowPlaying = null;
        }
    }
})

export const {addNowPlayingMovies,removeNowPlayingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;