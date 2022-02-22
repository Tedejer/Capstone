import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import NavbarV1 from "./components/NavbarV1";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import Profile from "./pages/ProfileSettings";
import DebugPage from "./pages/DebugPage";
import InfoPage from "./pages/InfoPage";

// Styling
import "./css/main.css";

function App() {
  return (
    <div>
      <NavbarV1 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/UserPage/:username" element={<UserPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Debug" element={<DebugPage />} />
        <Route path="/InfoPage" element={<InfoPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
