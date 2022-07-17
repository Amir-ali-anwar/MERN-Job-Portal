import axios from "axios";
import {
  getUserFromLocalStorage,
  addTokenToLocalStorage,
} from "./localStorage";
import { logout } from "../features/user/userSlice";
const customFetch = axios.create({
  baseURL: "/api/v1/",
});
const result = localStorage.getItem("token") || "null";

// customFetch.defaults.headers.common["Authorization"] = `Bearer ${result} `;

// customFetch.interceptors.request.use(
//   (config) => {
//     config.headers.common["Authorization"] = `Bearer ${result} `;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// customFetch.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error, thunkAPI) => {
//     if (error.response.status === 401) {
//       thunkAPI.dispatch(logout());
//       thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
//     }
//     return Promise.reject(error);
//   }
// );
export default customFetch;
