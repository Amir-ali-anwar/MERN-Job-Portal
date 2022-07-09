import { Landing, Error } from "./Pages/";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<div>dashboard</div>}></Route>
      <Route path="/register" element={<div>register</div>}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
