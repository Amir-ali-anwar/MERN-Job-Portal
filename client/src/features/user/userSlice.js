import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../Utils/axios";
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
};
export const registerUser = createAsyncThunk(
  "user/registeruser",
  async (user, thunkAPI) => {
    console.log(user);
    try {
      const resp = await customFetch.post("/auth/register", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
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
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.showAlert = true;
      state.alertText = "User Created! Redirecting...";
      state.alertType = "success";
      state.token = payload.token;
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.alertText = action;
      state.alertType = "danger";
    },
  },
});

export const { displayAlert, clearAlert } = usrSlice.actions;
export default usrSlice.reducer;
