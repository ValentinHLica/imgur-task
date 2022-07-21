import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitialState } from "@interface/posts";

const initialState: InitialState = {
  data: null,
  loading: false,
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
    setPosts: (state, payload: PayloadAction<number>) => {},
    setLoading: (state, payload: PayloadAction<boolean>) => {
      state.loading = payload.payload;
    },
  },
});

export const { setPosts } = posts.actions;

export default posts.reducer;
