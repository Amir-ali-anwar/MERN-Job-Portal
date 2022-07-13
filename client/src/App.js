import { Landing, Error, Register } from "./Pages/";
import {
  addJob,
  allJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="Stats" element={<Stats />} />
          <Route path="add-Job" element={<addJob />} />
          <Route path="all-Job" element={<allJobs />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer position="top-center" limit={1} />
    </>
  );
}

export default App;
