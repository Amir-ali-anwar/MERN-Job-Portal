import axios from "axios";
import {getTokenFromLocalStorage,} from "./localStorage";
import { logout } from "../features/user/userSlice";
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
customFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
      if (error.response.status === 401) {
        logout();
      }
      return Promise.reject(error)
  }
);
// }
 

export default customFetch;
