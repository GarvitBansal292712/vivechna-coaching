import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import OurCourses from "./pages/OurCourses";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import UPSC from "./pages/UPSC";
import PCS from "./pages/PCS";
import Judiciary from "./pages/Judiciary";
import CLAT from "./pages/CLAT";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
function App() {
  return (
    <Router>
      {/* Navbar stays constant across pages */}
      <Navbar />

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/our-courses" element={<OurCourses />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/courses/upsc" element={<UPSC />} />
        <Route path="/courses/clat" element={<CLAT />} />
        <Route path="/courses/pcs" element={<PCS />} />
        <Route path="/courses/judiciary" element={<Judiciary />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
