// Основні його ендпоінти:

// GET /campers для отримання всіх оголошень (фільтрація обов’язково має виконуватися на бекенді, не на фронті)
// GET /campers/:id
// https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchAllCampers = createAsyncThunk(
  "campers/all",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/campers");

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "campers/one",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`campers/${id}`);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
