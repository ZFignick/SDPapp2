// src/pages/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Home.css";

const Home = () => {
    const hartfordPosition = [41.7658, -72.6734]; // Coordinates for Hartford, Connecticut
    const [filter, setFilter] = useState("all");

    const resources = [
        { type: "government", position: [41.7658, -72.6734], name: "Government Building" },
        { type: "education", position: [41.7688, -72.6754], name: "School" },
        { type: "medical", position: [41.7628, -72.6714], name: "Hospital" },
    ];

    const filteredResources = filter === "all" ? resources : resources.filter(resource => resource.type === filter);

    return (
        <div className="home-container">
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
            <h1>Welcome to the Wellbeing App</h1>
            <p>This project aims to provide insights into the wellbeing of the community.</p>
            <div className="map-container">
                <div className="filters">
                    <button onClick={() => setFilter("all")}>All</button>
                    <button onClick={() => setFilter("government")}>Government</button>
                    <button onClick={() => setFilter("education")}>Education</button>
                    <button onClick={() => setFilter("medical")}>Medical</button>
                </div>
                <MapContainer center={hartfordPosition} zoom={13} style={{ height: "400px", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {filteredResources.map((resource, index) => (
                        <Marker key={index} position={resource.position}>
                            <Popup>{resource.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Home;