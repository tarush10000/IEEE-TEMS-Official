import React from "react";
import './utils/CustomCursor.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import DevelopersPage from "./pages/DevelopersPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
