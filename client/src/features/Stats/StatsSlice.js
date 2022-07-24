import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../Utils/axios";
import JobSlice from "../Job/JobSlice";

const initialState = {
  isLoading: false,
  stats: {},
  monthlyApplications: [],
};

export const ShowStats = createAsyncThunk('showStats',async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get("/jobs/stats");

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

const StatusSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    showstats: (state) => {
      return { ...state };
    },
  },
  extraReducers: {
    [ShowStats.pending]: (state) => {
      state.isLoading = true;
    },
    [ShowStats.fulfilled]: (state, { payload }) => {
     state.stats = payload.defaultStats;
     state.monthlyApplications = payload.monthlyApplications;
    },
  },
});
export const { showstats } = StatusSlice.actions;
export default StatusSlice.reducer;
