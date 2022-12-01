import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from '../Pages/login'
import Register from '../Pages/register'
import { useEffect } from "react";
import Calendar from "../Pages/calendar";
import Profile from "../Pages/Profile";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/calendar" element={<Calendar/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
