import { Landing, Error, Register, ProtectedRoute } from "./Pages/";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import React from "react";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="Stats" element={<Stats />} />
          <Route path="add-Job" element={<AddJob />} />
          <Route path="all-Job" element={<AllJobs />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
