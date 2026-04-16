import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Branch_mangement from "./Pages/Branch_mangement";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route  path="/branch" element={<Branch_mangement/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
 