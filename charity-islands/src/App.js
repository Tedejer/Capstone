import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <header>
        <h1>Charity Islands</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/LoginPage">Login</Link>
        <Link to="/AboutPage">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/UserPage/:username" element={<UserPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
