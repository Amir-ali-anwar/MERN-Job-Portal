import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Landing, Error, Register, ProtectedRoute } from "./Pages/";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./Pages/Dashboard";
import { ErrorHandler } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <BrowserRouter>
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
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
