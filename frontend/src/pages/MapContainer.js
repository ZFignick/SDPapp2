import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./../styles/MapContainer.css";

const Map = () => {
    const [filter, setFilter] = useState("all");
    const hartfordPosition = [41.7637, -72.6851];
    const filteredResources = []; // Replace with your actual filtered resources

    return (
        <div className="map-page">
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

export default Map;