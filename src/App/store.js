
import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "../feature/inventorySlice"

const store = configureStore({
    reducer:{
        inventory:inventorySlice
    }
})

export default store;