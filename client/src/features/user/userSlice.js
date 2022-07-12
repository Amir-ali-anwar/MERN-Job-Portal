import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};
// export const createAsyncThunk()
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
