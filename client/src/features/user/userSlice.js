import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../Utils/axios";
import checkForUnauthorizedResponse from "../../Utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  addTokenToLocalStorage,
  getTokenFromLocalStorage,
} from "../../Utils/localStorage";
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
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
export const UpdateUser = createAsyncThunk(
  "user/UpdateUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.patch("/auth/updateUser", user);
      return resp.data;
    } catch (error) {
       return checkForUnauthorizedResponse(error, thunkAPI);
      // return thunkAPI.rejectWithValue(error.response.data.msg);
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
      removeUserFromLocalStorage();
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
      const { isAleadyMember: user, token } = payload;
      state.isLoading = false;
      state.showAlert = true;
      state.alertText = "User Created! Redirecting...";
      state.alertType = "success";
      state.user = user;
      state.token = token;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.alertText = payload;
      state.alertType = "danger";
    },
    // Login user
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { isAleadyMember: user, token } = payload;
      // console.log(token);
      state.isLoading = false;
      state.user = user;
      state.token = token;
      state.showAlert = true;
      state.alertText = "Login successfully ! Redirecting...";
      state.alertType = "success";
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.showAlert = true;
      state.alertText = payload;
      state.alertType = "danger";
    },
    // update user
    [UpdateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [UpdateUser.fulfilled]: (state, { payload }) => {
      const {user, token } = payload;
      state.isLoading = false;
      state.user = user;
      state.token = token;
      state.showAlert = true;
      state.alertText = "Update user successfully!";
      state.alertType = "success";
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
    },
    [UpdateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.showAlert = true;
      state.alertText = payload;
      state.alertType = "danger";
    },
  },
});

export const {
  displayAlert,
  clearAlert,
  logout,
  sidebarToggleHandler,
} = usrSlice.actions;
export default usrSlice.reducer;
