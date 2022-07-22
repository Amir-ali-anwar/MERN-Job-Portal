import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../Utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  addTokenToLocalStorage,
  getTokenFromLocalStorage,
} from "../../Utils/localStorage";

 const result = localStorage.getItem("user") || '';
 const user = result ? JSON.parse(result) : '';
 const initialState = {
   isEditing: false,
   isLoading: false,
   editJobId: "",
   position: "",
   company: "",
   jobLocation: user.location || "",
   jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
   jobType: "full-time",
   statusOptions: ["interview", "declined", "pending"],
   status: "pending",
   showAlert: false,
   alertText: "",
   alertType: "",
   jobs:[],
   totalJobs:0,
   numOfPages:1,
   page:1
 };

export const CreateJob = createAsyncThunk(
  "user/Job",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/jobs", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const GetAllJob = createAsyncThunk(
  "user/Jobs",
  async (_, thunkAPI) => {
    try {
      
      const resp = await customFetch("/jobs");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
const JobSlice = createSlice({
  name: "Job",
  initialState,
  reducers: {
    displayAlert: (state) => {
      state.showAlert = true;
      state.alertText = "Please enter all the values";
      state.alertType = "danger";
    },
    clearAlert: (state) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
  extraReducers: {
    [CreateJob.pending]: (state) => {
      state.isLoading = true;
    },
    [CreateJob.fulfilled]: (state) => {
      state.isLoading = false;
      state.showAlert = true;
      state.alertText = "Job Created successfully";
      state.alertType = "success";
    },
    [CreateJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.alertText = payload;
      state.alertType = "danger";
    },
    [GetAllJob.pending]: (state) => {
      state.isLoading = true;
    },
    [GetAllJob.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.jobs = payload.payload.jobs;
      state.numOfPages = payload.numOfPages;
      state.totalJobs = payload.totalJobs;
    },
    [GetAllJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.alertText = payload;
      state.alertType = "danger";
    },
  },
});
export const { displayAlert, clearAlert, handleChange } = JobSlice.actions;
export default JobSlice.reducer