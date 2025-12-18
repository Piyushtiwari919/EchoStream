import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import gptReducer from "./gptSlice.js";
import configReducer from "./configSlice.js";
import interestedMovieReducer from "./interestedMovieSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    interestedMovie: interestedMovieReducer,
  },
});

export default appStore;
