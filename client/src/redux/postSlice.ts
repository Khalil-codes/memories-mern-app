import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../api";
import { IPost, IPostClient, IReduxInitialState } from "../types";

export const getPosts = createAsyncThunk("post/getAll", async () => {
    const { data } = await api.getPosts();
    return data.data.posts;
});
export const createPost = createAsyncThunk(
    "post/create",
    async (postData: IPostClient) => {
        const { data } = await api.createPost(postData);
        return data.data.post;
    }
);
const initialState: IReduxInitialState = {
    posts: [],
    loading: false,
    error: false,
};

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(
                getPosts.fulfilled,
                (state, action: PayloadAction<IPost[]>) => {
                    state.posts = action.payload;
                    state.loading = false;
                }
            )
            .addCase(getPosts.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(
                createPost.fulfilled,
                (state, action: PayloadAction<IPost>) => {
                    state.posts?.push(action.payload);
                    state.loading = false;
                }
            );
    },
});

export default postSlice.reducer;
