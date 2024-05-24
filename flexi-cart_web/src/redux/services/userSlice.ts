import { createSlice } from "@reduxjs/toolkit";
import { activateUser, forgotPassword, loadUser, loginUser, registerUser, resendActivationEmail, resetPassword, verifyUser } from "../features/userActions";


export type UserStateType = {
    user: {
        first_name: string;
        last_name: string;
        email: string;
        username: string;
    };
    authenticated: boolean;
    token: string;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string;
};

const initialState: UserStateType = {
    user: {
        first_name: "",
        last_name: "",
        email: "",
        username: "",
    },
    authenticated: false,
    token: "",
    loading: 'idle',
    error: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        authenticateUser: (state) => {

            state.authenticated = true;

        },
        logoutUser: (state) => {
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            state.authenticated = false;
            state.token = "";
            state.user = {
                first_name: "",
                last_name: "",
                email: "",
                username: "",
            };

        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = 'pending';

        }).addCase(registerUser.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.user = action.payload.user;

        }).addCase(registerUser.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Something went wrong';

        }).addCase(loginUser.pending, (state) => {
            state.loading = 'pending';
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.token = action.payload.access;
            state.authenticated = true;
            localStorage.setItem("access", action.payload.access);
            localStorage.setItem("refresh", action.payload.refresh);
        }).addCase(loginUser.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Something went wrong';
            state.authenticated = false;
        }).addCase(activateUser.pending, (state) => {
            state.loading = 'pending';
        }).addCase(activateUser.fulfilled, (state) => {
            state.loading = 'succeeded';
        }).addCase(activateUser.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Something went wrong';

        }).addCase(resendActivationEmail.pending, (state) => {
            state.loading = 'pending';
        }).addCase(resendActivationEmail.fulfilled, (state) => {
            state.loading = 'succeeded';
        }).addCase(resendActivationEmail.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Something went wrong';
        }).addCase(verifyUser.pending, (state) => {
            state.loading = 'pending';
        }).addCase(verifyUser.fulfilled, (state) => {
            state.loading = 'succeeded';
            state.authenticated = true;
            state.token = localStorage.getItem('access') || '';
        }).addCase(verifyUser.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Something went wrong';
            state.authenticated = false
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            state.token = '';
        }).addCase(loadUser.pending, (state) => {
            state.loading = 'pending';
        }).addCase(loadUser.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.user = action.payload;

        }).addCase(loadUser.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Something went wrong';

        }).addCase(forgotPassword.pending, (state) => {
            state.loading = 'pending';
        }).addCase(forgotPassword.fulfilled, (state) => {
            state.loading = 'succeeded';
        }).addCase(forgotPassword.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Something went wrong';
        }).addCase(resetPassword.pending, (state) => {
            state.loading = 'pending';
        }).addCase(resetPassword.fulfilled, (state) => {
            state.loading = 'succeeded';
        }).addCase(resetPassword.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || 'Something went wrong';
        })

    }

});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;