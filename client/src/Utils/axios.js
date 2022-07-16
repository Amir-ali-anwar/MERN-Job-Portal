import axios from "axios";
import {
  getUserFromLocalStorage,
  addTokenToLocalStorage,
} from "./localStorage";
import { logout } from "../features/user/userSlice";
const customFetch = axios.create({
  baseURL: "/api/v1/",
});

customFetch.interceptors.request.use(
  (config) => {
    const user = addTokenToLocalStorage();
    console.log(user);
    if (user) {
      config.headers.common["Authorization"] = `Bearer ${user}`;
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
customFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error, thunkAPI) => {
    // console.log(error.response)
    if (error.response.status === 401) {
      thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return Promise.reject(error);
  }
);
export default customFetch;
