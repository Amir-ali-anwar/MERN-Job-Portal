import { Landing, Error, Dashboard, Register } from "./Pages/";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<div>dashboard</div>}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
