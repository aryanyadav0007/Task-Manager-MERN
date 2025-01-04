import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import CheckLogin from "./context/CheckLogin";

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/tasks"
          element={
            <CheckLogin>
              <Tasks />
            </CheckLogin>
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;

// mongo pass = qW1rYw0DKehOkiiT
// mongo username = aryanyadav2524
