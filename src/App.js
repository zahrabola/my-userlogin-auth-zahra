////import logo from './logo.svg';
import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Hompage from "./Page/Hompage";

/// testing fake user api using post man
//https://lunar-trinity-771169.postman.co/workspace/My-Workspace~6407ee3b-5f61-4fa6-8871-5ad0716208ee/request/20410084-09ee7d5d-18b4-465d-9ea4-cf1707d9e390?tab=body 
//https://dummyjson.com/users
//https://dummyjson.com/auth/login


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
