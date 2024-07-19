////import logo from './logo.svg';
import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Hompage from "./Page/Hompage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Hompage />} />
      </Routes>
    </div>
  );
}

export default App;
