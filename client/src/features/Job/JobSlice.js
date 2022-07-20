import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../Utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  addTokenToLocalStorage,
  getTokenFromLocalStorage,
} from "../../Utils/localStorage";

const initialState = {
  isEditing: false,
  editJobId: "",
  position: "",
  company: "",
  jobLocation: getUserFromLocalStorage().location || "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  showAlert: false,
  alertText: "",
  alertType: "",
};
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
  },
});
export const { displayAlert, clearAlert } = JobSlice.actions;
export default JobSlice.reducer