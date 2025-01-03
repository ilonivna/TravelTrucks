import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamper } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    item: [],
    favorites: [],
    loading: false,
    error: null,
    total: null,
    page: 1,
    locations: [],
    filters: {
      location: "",
      equipment: [],
      type: [],
      price: null,
    },
  },
  reducers: {
    setFavorite: {
      reducer(state, action) {
        state.favorites.push(action.payload);
      },
    },
    deleteFavorite: {
      reducer(state, action) {
        state.favorites = state.favorites.filter(
          (item) => item !== action.payload
        );
      },
    },
    clearFilters: {
      reducer(state) {
        state.filters = [];
      },
    },
    setFilters: {
      reducer(state, action) {
        state.filters = action.payload;
      },
    },
    setPage: {
      reducer(state, action) {
        state.page = action.payload;
      },
    },
    setTotal: {
      reducer(state, action) {
        state.total = action.payload;
      },
    },
    setError: {
      reducer(state, action) {
        state.error = action.payload;
      },
    },
    setLoading: {
      reducer(state, action) {
        state.loading = action.payload;
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.total = action.payload.total;
        state.items = action.payload.items;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchAllCampers.rejected, handleRejected)
      .addCase(fetchCamper.pending, handlePending)
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamper.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
export const {
  setFavorite,
  deleteFavorite,
  clearFilters,
  setFilters,
  setError,
  setLoading,
  setPage,
  setTotal,
} = campersSlice.actions;
