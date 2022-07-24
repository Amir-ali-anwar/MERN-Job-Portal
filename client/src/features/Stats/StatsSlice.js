import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../Utils/axios";
import JobSlice from "../Job/JobSlice";

const initialState={
    stats:{},
    monthlyApplications:[]
}


const StatusSlice= createSlice({
    name:'stats',
    initialState,
    reducers:{
        showstats:()=>{
            state
        }
    },
    extraReducers:{

    }
})
export const { showstats } = StatusSlice.actions;
export default StatusSlice.reducer