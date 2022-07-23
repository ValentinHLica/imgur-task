import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  InitialState,
  PostItem,
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
  modalPost: null,
};

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostItem[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSection: (state, action: PayloadAction<SortSection>) => {
      state.section = action.payload;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setWindow: (state, action: PayloadAction<SortWindow>) => {
      state.window = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setShowViral: (state, action: PayloadAction<boolean>) => {
      state.showViral = action.payload;
    },
    setModalPost: (state, action: PayloadAction<PostItem>) => {
      state.modalPost = action.payload;
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
  setModalPost,
} = posts.actions;

export default posts.reducer;
