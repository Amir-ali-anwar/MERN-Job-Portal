import axios from "axios";
import {
  getTokenFromLocalStorage,
  addTokenToLocalStorage,
} from "./localStorage";
import { logout } from "../features/user/userSlice";
const result = localStorage.getItem("token") || "null";
let token = result ? JSON.parse(result) : null;
const customFetch = axios.create({
  baseURL: "/api/v1/",
});

customFetch.interceptors.request.use((config) => {
  const user = getTokenFromLocalStorage();
    if (user) {
    config.headers.common["Authorization"] = `Bearer ${user}`;
  }
  return config;
});


// export function checkForUnauthorizedResponse(error, thunkAPI) {
//  if (error.response.status === 401) {
//    thunkAPI.dispatch(logout());
//    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
//  }
//  return thunkAPI.rejectWithValue(error.response.data.msg);
// }
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);


export default customFetch;
