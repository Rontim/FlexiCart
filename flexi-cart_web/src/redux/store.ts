import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./services/userSlice";
import productReducer from "./services/productSlice";


export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

