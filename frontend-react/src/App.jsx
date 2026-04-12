import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ShareEnergy from "./pages/ShareEnergy";
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(!!localStorage.getItem("user"));
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/share-energy" element={<ShareEnergy />} />
              <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/predict" element={<Navigate to="/dashboard" replace />} />
              <Route path="/contact" element={<Navigate to="/share-energy" replace />} />
              <Route path="/about" element={<Navigate to="/dashboard" replace />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
