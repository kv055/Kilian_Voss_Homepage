import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_Page from "./sites/LandingPage";
import PortfolioPage from "./sites/PortfolioPage";
import ProfilePage from "./sites/ProfilePage";
import SkillsPage from "./sites/SkillsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing_Page />}></Route>
        <Route path="/Profile" element={<ProfilePage />}></Route>
        <Route path="/Portfolio" element={<PortfolioPage />}></Route>
        <Route path="/Skills" element={<SkillsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
