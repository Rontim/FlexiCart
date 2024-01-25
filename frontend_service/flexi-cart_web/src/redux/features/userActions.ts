/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface user {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    re_password: string;
}


export const registerUser = createAsyncThunk(
    "user/registerUser",
    async ({ first_name, last_name, email, password, username, re_password }: user, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:8000/api/v2/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    username,
                    password,
                    re_password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                return data;
            }
            else {
                console.log(response.status)
                return thunkAPI.rejectWithValue(response.status)
            }

        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }

    }
);

export const loginUser = createAsyncThunk(
    'user/login',
    async ({ email, password }: { email: string, password: string }, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/auth/jwt/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                return data;
            }
            else {
                const error_detail = await response.json()
                console.log(error_detail)
                return thunkAPI.rejectWithValue(error_detail)
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const verifyUser = createAsyncThunk(
    'user/verify',
    async (_, thunkAPI) => {
        if (localStorage.getItem('access')) {
            const token = localStorage.getItem('access');
            try {
                const response = await fetch("http://localhost:8000/api/v1/auth/jwt/verify/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token,
                    }),
                });
                if (response.ok) {
                    const dispatch = thunkAPI.dispatch;
                    dispatch(loadUser());
                    return response.status;
                }
                else if (response.status == 401) {
                    const data = response.json()

                    console.log(data)
                    return thunkAPI.rejectWithValue(data)
                }
            } catch (error) {
                return thunkAPI.rejectWithValue(error)
            }
        } else {
            return thunkAPI.rejectWithValue("No token")
        }

    }
)

export const activateUser = createAsyncThunk(
    'user/activate',
    async ({ uid, token }: { uid: string | undefined, token: string | undefined }, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:8000/api/v2/users/activation/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uid,
                    token,
                }),
            });

            if (response.ok) {

                return response.status;
            }
            else {
                const error_detail = await response.json()
                console.log(error_detail)
                return thunkAPI.rejectWithValue(await response.json())
            }
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }

    }

)


export const resendActivationEmail = createAsyncThunk(
    'user/resend-activation-email',
    async (email: string, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:8000/api/v2/users/resend_activation/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });


            console.log(response.status)

            if (response.ok) {
                return response.status
            }

        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }

    }

)

export const loadUser = createAsyncThunk(
    'user/load-user',
    async (_, thunkAPI) => {
        if (localStorage.getItem("access")) {
            const token = localStorage.getItem("access");
            try {
                const response = await fetch('http://localhost:8000/api/v2/users/me/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `JWT ${token}`,
                    },

                })

                if (response.ok) {
                    const data = await response.json();
                    return data;
                }
                else {
                    const error = await response.json();
                    return thunkAPI.rejectWithValue(error)
                }
            } catch (error) {
                return thunkAPI.rejectWithValue(error)
            }
        } else {
            return thunkAPI.rejectWithValue("No token")
        }
    }
)


export const forgotPassword = createAsyncThunk(
    'user/forgot-password',
    async (email: string, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:8000/api/v2/users/reset_password/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });

            if (response.ok) {
                return response.status;
            }
            else {
                return thunkAPI.rejectWithValue(await response.json())
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }

    }
)

export const resetPassword = createAsyncThunk(
    'user/reset-password',
    async ({ uid, token, new_password, re_new_password }: { uid: string | undefined, token: string | undefined, new_password: string, re_new_password: string }, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:8000/api/v2/users/reset_password_confirm/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uid,
                    token,
                    new_password,
                    re_new_password,
                }),
            });

            if (response.ok) {
                return response.status;
            }
            else {
                return thunkAPI.rejectWithValue(await response.json())
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }

    }
)
