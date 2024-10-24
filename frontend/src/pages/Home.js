// src/pages/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./../styles/Home.css";
/*import Navbar from "../components/Navbar";*/

const Home = () => {
    const hartfordPosition = [41.7658, -72.6734]; // Coordinates for Hartford, Connecticut
    const [filter, setFilter] = useState("all");

    const resources = [
        { type: "government", position: [41.7658, -72.6734], name: "Government Building" },
        { type: "education", position: [41.7688, -72.6754], name: "School" },
        { type: "medical", position: [41.7628, -72.6714], name: "Hospital" },
    ];

    const filteredResources = filter === "all" ? resources : resources.filter(resource => resource.type === filter);

    const teamMembers = [
        { name: "Adarsh Rao Makarla", email: "adarsh_rao.makarla@uconn.edu" },
        { name: "Benjamin Acorda", email: "benjamin.acorda@uconn.edu" },
        { name: "Novrus Shehaj", email: "novrus.shehaj@uconn.edu" },
        { name: "Pierson Faulk", email: "pierson.faulk@uconn.edu" },
        { name: "Zachary Figuenick", email: "zachary.figuenick@uconn.edu" },
    ];

    return (
        <div className="home-container">
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Wellbeing Dashboard</Link>
                <Link to="/MapContainer">Interactive Map</Link>
                <Link to="/aggregated-score">Aggregated Wellbeing Score</Link>
                <Link to="/resources">Local Resources</Link>
                <Link to="/education">Education</Link>
                <Link to="/housing">Housing</Link>
                <Link to="/trend-analysis">Trend Analysis</Link>
                <Link to="/access-to-services">Access to Services</Link>
                <Link to="/about">About Us</Link>
            </nav>
            <h1>TOP Wellbeing - UCONN Senior Design Project</h1>
            <h2>Meet Team 47</h2>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <div className="team-member-button">
                            <strong>{member.name}</strong>
                            <br/>
                            <span>{member.email}</span>
                        </div>
                    </div>
                ))}
            </div>
            <p>
                Our project aims to provide insights into the wellbeing of the [INSERT END USER] community inside
                Hartford, CT.
            </p>
            <p>
                We are focused on providing solutions to increase well being of the community in terms of [INSERT
                PROBLEM WE ARE TACKLING HERE (ex. Economic Stability, Education, Health, etc.)].
            </p>
            <p>
                We plan on developing a web app that can provide users access to resources and information that can help
                them improve their wellbeing.
            </p>
            <p>
                We are planning on incorporating data from various sources to provide a comprehensive view of the
                wellbeing of the community.
                Currently some datasets we are looking at include data relating to salary, ability to buy a house such
                as the following:
            </p>
            <div className="link-buttons">
                <a href="https://www.bls.gov/oes/tables.htm" target="_blank" rel="noopener noreferrer"
                   className="link-button">Employment rates</a>
                <a href="https://www.bls.gov/regions/northeast/summary/blssummary_hartford.pdf" target="_blank"
                   rel="noopener noreferrer" className="link-button">Economic summary</a>
            </div>

            <div className="map-container">
                <div className="filters">
                    <button onClick={() => setFilter("all")}>All</button>
                    <button onClick={() => setFilter("government")}>Government</button>
                    <button onClick={() => setFilter("education")}>Education</button>
                    <button onClick={() => setFilter("medical")}>Medical</button>
                </div>
                <MapContainer center={hartfordPosition} zoom={13} style={{height: "400px", width: "100%"}}>
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