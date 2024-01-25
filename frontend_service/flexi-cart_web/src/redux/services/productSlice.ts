import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../features/productAction";


export interface ProductStateType {
    products: {
        id: number;
        name: string;
        price: string;
        description: string;
        image: string;
        category: string;
    }[];
    cart: {
        id: number;
        name: string;
        price: string;
        description: string;
        image: string;
        category: string;
    }[];
    productCategories: {
        id: number;
        name: string;
    }[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string;
}

const initialState = {
    products: [],
    cart: [],
    productCategories: [],
    loading: 'idle',
    error: "",
} as ProductStateType;

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.products = action.payload.products;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || '';
            })
    }
})

// export const { } = productSlice.actions;
export default productSlice.reducer;

