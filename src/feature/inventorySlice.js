import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [
        {
            id: 2,
            name: "laptop",
            price: 50000,
            qty: 5,
            category: "electronics"
        },
        {
            id: 3,
            name: "headphones",
            price: 2500,
            qty: 10,
            category: "electronics"
        },
        {
            id: 4,
            name: "keyboard",
            price: 1500,
            qty: 8,
            category: "electronics"
        },
        {
            id: 5,
            name: "mouse",
            price: 800,
            qty: 15,
            category: "electronics"
        },
        {
            id: 6,
            name: "office chair",
            price: 7500,
            qty: 4,
            category: "furniture"
        },
        {
            id: 7,
            name: "table",
            price: 6000,
            qty: 6,
            category: "furniture"
        },
        {
            id: 8,
            name: "notebook",
            price: 100,
            qty: 50,
            category: "stationery"
        },
        {
            id: 9,
            name: "water bottle",
            price: 500,
            qty: 20,
            category: "accessories"
        },
        {
            id: 10,
            name: "smartwatch",
            price: 12000,
            qty: 7,
            category: "electronics"
        }
    ],
    editValue: null
}

const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        add: (state, action) => {
            const inventory = {
                id: new Date().getTime(),
                name: action.payload.name,
                price: action.payload.price,
                qty: action.payload.qty,
                category: action.payload.category
            }
            state.product.push(inventory);
        },
        handleEdit: (state, action) => {
            const inventoryIndex = state.product.findIndex((p) => p.id === state.editValue.id);

            if (inventoryIndex !== -1) {
                state.product[inventoryIndex] = action.payload
            }
            state.editValue = null;
        },
        handleDelete: (state, action) => {
            state.product = state.product.filter((p) => p.id !== action.payload);
        },
        setEditValue: (state, action) => {
            state.editValue = state.product.find((p) => p.id === action.payload)
        }
    }
});
export const { add, handleEdit, handleDelete, setEditValue } = inventorySlice.actions
export default inventorySlice.reducer