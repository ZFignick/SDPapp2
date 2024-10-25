// src/pages/MapContainer.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/MapContainer.css";

const Map = () => {
    const hartfordPosition = [41.7658, -72.6734]; // Coordinates for Hartford, Connecticut
    const [filter, setFilter] = useState("all");

    const resources = [
        { type: "government", position: [41.7658, -72.6734], name: "Government Building" },
        { type: "education", position: [41.7688, -72.6754], name: "School" },
        { type: "medical", position: [41.7628, -72.6714], name: "Hospital" },
    ];

    const filteredResources = filter === "all" ? resources : resources.filter(resource => resource.type === filter);

    return (
        <div className="map-page">
            <div className="filters">
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("government")}>Government</button>
                <button onClick={() => setFilter("education")}>Education</button>
                <button onClick={() => setFilter("medical")}>Medical</button>
            </div>
            <div className="map-container">
                <MapContainer center={hartfordPosition} zoom={13} style={{ height: "500px", width: "100%" }}>
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

export default Map;