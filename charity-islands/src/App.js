import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <h1>Charity Islands</h1>
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/UserPage/:username" element={<UserPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
