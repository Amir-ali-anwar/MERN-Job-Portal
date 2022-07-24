import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../Utils/axios";
const initialState = {
  isLoading: false,
  stats: {},
  monthlyApplications: [],
  showAlert: false,
  alertText: "",
  alertType: "",
  search: "",
  searchType: "all",
  searchStatus: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
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
      state.stats = payload.defaultStatus;
      state.isLoading = false;
      state.monthlyApplications = payload.monthlyApplications;
    },
    [ShowStats.rejected]: (state) => {
      state.isLoading = false;
      state.isLoading = false;
      state.showAlert = true;
      state.alertText = "some error";
      state.alertType = "danger";
    },
  },
});
export const { showstats } = StatusSlice.actions;
export default StatusSlice.reducer;
