import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import JobSlice from "../features/Job/JobSlice";
import StatsSlice from "../features/Stats/StatsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    Job: JobSlice,
    Stats: StatsSlice,
  },
});
