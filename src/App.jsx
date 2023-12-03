import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { TeamPage } from "./Pages/TeamPage";
import { AboutPage } from "./Pages/AboutPage";
import { ContentPage } from "./Pages/ContentPage";
import { ContactPage } from "./Pages/ContactPage";
import ScrollToTop from "./Components/scrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/offerings" element={<ContentPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
