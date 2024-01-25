import { createAsyncThunk } from "@reduxjs/toolkit";

// interface Product {
//     name: string;
//     price: string;
//     description: string;
//     image: string;
//     category: string;
// }

// interface ProductCategory {
//     id: number;
//     name: string;
// }


export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async (_, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:8000/api/products/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                return data;
            }
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }

    }
);


export const fetchCategories = createAsyncThunk(
    "product/categories",
    async (_, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:8000/api/product-categories/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                return data;
            }
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }

    }
);