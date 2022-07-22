import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  InitialState,
  SortSection,
  SortType,
  SortWindow,
} from "@interface/posts";

const initialState: InitialState = {
  data: null,
  loading: false,
  section: "hot",
  sort: "viral",
  window: "day",
  page: 1,
  showViral: true,
};

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<number>) => {},
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setShowViral: (state, action: PayloadAction<boolean>) => {
      state.showViral = action.payload;
    },
    setSection: (state, action: PayloadAction<SortSection>) => {
      state.section = action.payload;
    },
    setWindow: (state, action: PayloadAction<SortWindow>) => {
      state.window = action.payload;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
  },
});

export const {
  setPosts,
  setLoading,
  setShowViral,
  setSection,
  setWindow,
  setSort,
} = posts.actions;

export default posts.reducer;
