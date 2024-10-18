// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EconomicStability from "./pages/EconomicStability";
import Housing from "./pages/Housing";
import Education from "./pages/Education";
import AggregatedWellbeingScore from "./pages/AggregatedWellbeingScore";
import TrendAnalysis from "./pages/TrendAnalysis";
import DisparityHighlighting from "./pages/DisparityHighlighting";
import AccessToServices from "./pages/AccessToServices";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/economic-stability">Economic Stability</Link>
          </li>
          <li>
            <Link to="/housing">Housing</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/aggregated-wellbeing-score">
              Aggregated Wellbeing Score
            </Link>
          </li>
          <li>
            <Link to="/trend-analysis">Trend Analysis</Link>
          </li>
          <li>
            <Link to="/disparity-highlighting">Disparity Highlighting</Link>
          </li>
          <li>
            <Link to="/access-to-services">Access to Services</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/economic-stability" element={<EconomicStability />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/education" element={<Education />} />
        <Route
          path="/aggregated-wellbeing-score"
          element={<AggregatedWellbeingScore />}
        />
        <Route path="/trend-analysis" element={<TrendAnalysis />} />
        <Route
          path="/disparity-highlighting"
          element={<DisparityHighlighting />}
        />
        <Route path="/access-to-services" element={<AccessToServices />} />
      </Routes>
    </Router>
  );
};

export default App;
