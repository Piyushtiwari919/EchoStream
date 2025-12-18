import { createSlice } from "@reduxjs/toolkit";

const interestedMovieSlice = createSlice({
  name: "interestedMovie",
  initialState: {
    movieVisiblity: false,
    movieInfo: null,
  },
  reducers: {
    toggleMovieVisiblity: (state, action) => {
      state.movieVisiblity = !state.movieVisiblity;
    },
    addMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
    removeMovieInfo: (state, action) => {
      state.movieInfo = null;
    },
  },
});

export const { toggleMovieVisiblity, addMovieInfo, removeMovieInfo } =
  interestedMovieSlice.actions;

export default interestedMovieSlice.reducer;
