import { createSlice } from "@reduxjs/toolkit";
//import operations here

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const campersSlice = createSlice({
    name: "campers",
    initialState: {
        items: [],
        favorites: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase()
    }
});

export const campersReducer = campersSlice.reducer;