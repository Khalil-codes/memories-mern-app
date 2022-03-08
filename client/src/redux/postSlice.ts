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
export const updatePost = createAsyncThunk(
    "post/update",
    async (details: { id: string; updatedPostData: IPostClient }) => {
        const { data } = await api.updatePost(
            details.id,
            details.updatedPostData
        );
        return { id: details.id, updatedPost: data.data.post };
    }
);
export const deletePost = createAsyncThunk(
    "post/delete",
    async (id: string) => {
        const { data } = await api.deletePost(id);
        return data.data.id;
    }
);

export const likePost = createAsyncThunk("post/like", async (id: string) => {
    const { data } = await api.likePost(id);
    return data.data.post;
});
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
            )
            .addCase(
                updatePost.fulfilled,
                (
                    state,
                    action: PayloadAction<{ id: string; updatedPost: IPost }>
                ) => {
                    console.log(action.payload.updatedPost);
                    state.posts = state.posts?.map((post) =>
                        post._id === action.payload.id
                            ? action.payload.updatedPost
                            : post
                    );
                }
            )
            .addCase(
                deletePost.fulfilled,
                (state, action: PayloadAction<string>) => {
                    console.log(action.payload);
                    state.posts = state.posts?.filter(
                        (post) => post._id !== action.payload
                    );
                }
            )
            .addCase(likePost.fulfilled, (state, action) => {
                state.posts = state.posts?.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                );
            });
    },
});

export default postSlice.reducer;
