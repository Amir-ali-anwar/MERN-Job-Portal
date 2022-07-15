import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../Utils/axios";
import {
  addUserToLocalStorage,
  removeUserToLocalStorage,
  getUserFromLocalStorage,
} from "../../Utils/localStorage";
const token = localStorage.getItem("token");
const user = localStorage.getItem("name");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token ? JSON.parse(token) : null,
  userLocation: userLocation || "",
  sidebarToggle: false,
};
export const registerUser = createAsyncThunk(
  "user/registeruser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/register", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginuser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/login", user);
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
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.localStorage = null;
      removeUserToLocalStorage();
    },
    sidebarToggleHandler: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const {
        user: { name },
        token,
        location,
      } = payload;
      state.isLoading = false;
      state.user = payload.user;
      state.showAlert = true;
      state.alertText = "User Created! Redirecting...";
      state.alertType = "success";
      state.token = payload.token;
      addUserToLocalStorage({ name, token, location });
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.alertText = payload;
      state.alertType = "danger";
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const {
        token,
        isAleadyMember: { name, location },
      } = payload;
      console.log(payload);
      state.isLoading = false;
      state.user = name;
      state.showAlert = true;
      state.alertText = "Login successfully ! Redirecting...";
      state.alertType = "success";
      state.token = token;
      addUserToLocalStorage({ name, token, location });
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.showAlert = true;
      state.alertText = payload;
      state.alertType = "danger";
    },
  },
});

export const { displayAlert, clearAlert, logout, sidebarToggleHandler } =
  usrSlice.actions;
export default usrSlice.reducer;
