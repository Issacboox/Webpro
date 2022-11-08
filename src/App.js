import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SignInSide from "./Login";
import Main from "./Main";
import SignUp from "./Register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="main" element={<Main />} />
        <Route path="Register" element={<SignUp />} />
      </Routes>
    </div>
  );
}
export default App;
