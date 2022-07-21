import { configureStore } from "@reduxjs/toolkit";

import posts from "./posts";

const store = configureStore({
  reducer: {
    posts,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
