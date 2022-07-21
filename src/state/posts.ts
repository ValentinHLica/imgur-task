import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitialState, SortSection } from "@interface/posts";

const initialState: InitialState = {
  data: null,
  loading: false,
  section: "hot",
  sort: "viral",
  window: "day",
  page: 1,
  showViral: true,
};

// export const addPosts = async () => {
//   return {
//     type: PostsActions.ADD_POSTS,
//     payload: amount,
//   };
// };

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
  },
});

export const { setPosts, setLoading, setShowViral, setSection } = posts.actions;

export default posts.reducer;
