import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import postReducer from "./postSlice";
import authReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        posts: postReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const usePosts = () => useSelector((state: RootState) => state.posts);
export const useAuth = () => useSelector((state: RootState) => state.auth);
export type AppDispatch = typeof store.dispatch;
