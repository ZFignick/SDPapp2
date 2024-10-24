// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Wellbeing Dashboard</Link>
            <Link to="/aggregated-score">Aggregated Wellbeing Score</Link>
            <Link to="/resources">Local Resources</Link>
            <Link to="/education">Education</Link>
            <Link to="/housing">Housing</Link>
            <Link to="/trend-analysis">Trend Analysis</Link>
            <Link to="/access-to-services">Access to Services</Link>
        </nav>
    );
};

export default Navbar;
