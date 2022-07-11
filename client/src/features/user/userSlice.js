import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};
// export const createAsyncThunk()
const usrSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
