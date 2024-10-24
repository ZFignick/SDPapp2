// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Education from "./pages/Education";
import AggregatedScore from "./pages/AggregatedScore";
import Resources from "./pages/Resources";
import Housing from "./pages/Housing";
import TrendAnalysis from "./pages/TrendAnalysis";
import AccessToServices from "./pages/AccessToServices";
import Map from "./pages/MapContainer";
import About from "./pages/About";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/MapContainer" element={<Map />} />
                <Route path="/education" element={<Education />} />
                <Route path="/aggregated-score" element={<AggregatedScore />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/housing" element={<Housing />} />
                <Route path="/trend-analysis" element={<TrendAnalysis />} />
                <Route path="/access-to-services" element={<AccessToServices />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;