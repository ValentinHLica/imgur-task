import { configureStore } from "@reduxjs/toolkit";

import postsReducers from "./posts";

const store = configureStore({
  reducer: {
    posts: postsReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
