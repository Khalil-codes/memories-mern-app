import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../api";
import { ICred, IGoogleUser, INormalUser, IUserData } from "../types";

export const registerUser = createAsyncThunk(
    "user/register",
    async (userData: IUserData) => {
        try {
            const {
                status,
                data: {
                    data: { user, token },
                },
            } = await api.registerUser(userData);
            if (status === 201) {
                delete user.password;
                delete user.createdAt;
                delete user.updatedAt;
                localStorage.setItem("user", JSON.stringify({ user, token }));
                return { user, token };
            }
        } catch (error: any) {
            console.log(error);
            return error.message;
        }
    }
);

export const loginGoogleUser = createAsyncThunk(
    "user/google/login",
    async ({ result, token }: { result: IGoogleUser; token: string }) => {
        delete result.googleId;
        localStorage.setItem("user", JSON.stringify({ user: result, token }));
        return { user: result, token: token };
    }
);
export const loginNormalUser = createAsyncThunk(
    "user/normal/login",
    async (credentials: ICred) => {
        try {
            const {
                status,
                data: {
                    data: { user, token },
                },
            } = await api.loginUser(credentials);
            if (status === 201) {
                delete user.password;
                delete user.createdAt;
                delete user.updatedAt;
                localStorage.setItem("user", JSON.stringify({ user, token }));
                return { user, token };
            }
        } catch (error: any) {
            console.log(error);
            return error.message;
        }
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
    user: IUserState | null;
}

const potentialUser =
    JSON.parse(localStorage.getItem("user") as string) || null;

const initialState: IAuthInitialState = {
    user: potentialUser,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginGoogleUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(
                registerUser.fulfilled,
                (
                    state,
                    action: PayloadAction<{ user: INormalUser; token: string }>
                ) => {
                    state.user = action.payload;
                }
            )
            .addCase(
                loginNormalUser.fulfilled,
                (
                    state,
                    action: PayloadAction<{ user: INormalUser; token: string }>
                ) => {
                    state.user = action.payload;
                }
            );
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
