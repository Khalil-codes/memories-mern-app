import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGoogleUser, INormalUser } from "../types";

export const loginUser = createAsyncThunk(
    "user/login",
    async ({
        result,
        token,
        loginType,
    }: {
        result: IGoogleUser;
        token: string;
        loginType: "Google" | "Email & Password";
    }) => {
        if (loginType === "Google") {
            localStorage.setItem(
                "user",
                JSON.stringify({ user: result, token })
            );
        }
        return { user: result, token: token };
    }
);

export const logoutUser = createAsyncThunk("user/logout", async () => {
    localStorage.removeItem("user");
});

interface IUserState {
    user: IGoogleUser | INormalUser;
    token: string;
}
interface IAuthInitialState {
    user?: IUserState | null;
    loading: boolean;
    error: boolean;
}

const potentialUser = JSON.parse(localStorage.getItem("user") as string);

const initialState: IAuthInitialState = {
    user: potentialUser ? potentialUser : null,
    loading: false,
    error: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state) => {
                state.error = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
