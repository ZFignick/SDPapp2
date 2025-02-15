// src/pages/MapContainer.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapContainer.css";

const hartfordPosition = [41.7658, -72.6734]; // Hartford, CT center

const resources = [
    { type: "government", position: [41.7658, -72.6734], name: "Government Building" },
    { type: "education", position: [41.7688, -72.6754], name: "School" },
    { type: "medical", position: [41.7628, -72.6714], name: "Hospital" },
];

// Component to reset the map view to Hartford when triggered
const ResetMapView = ({ resetTrigger }) => {
    const map = useMap();
    
    React.useEffect(() => {
        if (resetTrigger) {
            map.flyTo(hartfordPosition, 15, { duration: 1.5 }); // Smooth zoom back to Hartford
        }
    }, [resetTrigger, map]);

    return null;
};

const MapPage = () => {
    const [filter, setFilter] = useState("all");
    const [resetTrigger, setResetTrigger] = useState(false);

    const filteredResources = filter === "all" ? resources : resources.filter(resource => resource.type === filter);

    const handleResetClick = () => {
        setResetTrigger(true);
        setTimeout(() => setResetTrigger(false), 1000); 
    };

    return (
        <div className="map-page">
            <div className="map-container">
                <MapContainer center={hartfordPosition} zoom={13} className="leaflet-map">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <ResetMapView resetTrigger={resetTrigger} />
                    {filteredResources.map((resource, index) => (
                        <Marker key={index} position={resource.position}>
                            <Popup>{resource.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            <div className="filters">
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("government")}>Government</button>
                <button onClick={() => setFilter("education")}>Education</button>
                <button onClick={() => setFilter("medical")}>Medical</button>
                <button onClick={handleResetClick} className="reset-button">Reset Map</button>
            </div>
        </div>
    );
};

export default MapPage;
