import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import postReducer from "./postSlice";
export const store = configureStore({
    reducer: {
        posts: postReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const usePosts = () => useSelector((state: RootState) => state.posts);
export type AppDispatch = typeof store.dispatch;
