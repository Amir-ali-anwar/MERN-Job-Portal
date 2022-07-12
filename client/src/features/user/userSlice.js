import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../Utils/axios";
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  token: "",
  user: "",
  userLocation: "",
};
export const registerUser = createAsyncThunk(
  "user/registeruser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post();
    } catch (error) {}
  }
);
const usrSlice = createSlice({
  name: "user",
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

export const { displayAlert, clearAlert } = usrSlice.actions;
export default usrSlice.reducer;
