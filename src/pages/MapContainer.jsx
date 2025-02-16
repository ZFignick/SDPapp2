// src/pages/MapContainer.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapContainer.css";

const hartfordPosition = [41.7658, -72.6734]; // Hartford, CT center

const resources = [
    { id: 1, type: "government", position: [41.7627, -72.6739], name: "Hartford City Hall" },
    { id: 2, type: "education", position: [41.7688, -72.6754], name: "School" },
    { id: 3, type: "medical", position: [41.7628, -72.6714], name: "Hospital" }
];

// Component to reset the map view to Hartford when triggered
const ResetMapView = ({ resetTrigger }) => {
    const map = useMap();
    
    React.useEffect(() => {
        if (resetTrigger) {
            map.flyTo(hartfordPosition, 15, { duration: 1.5 }); // Zooms back to Hartford
        }
    }, [resetTrigger, map]);

    return null;
};

// Component to move the map to a specific location
const MoveToLocation = ({ position }) => {
    const map = useMap();
    
    React.useEffect(() => {
        if (position) {
            map.flyTo(position, 18, { duration: 1.5 });
        }
    }, [position, map]);

    return null;
};

const MapPage = () => {
    const [resetTrigger, setResetTrigger] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [filter, setFilter] = useState("all"); // Default filter to show all locations

    const handleResetClick = () => {
        setResetTrigger(true);
        setTimeout(() => setResetTrigger(false), 1000); 
    };

    const handleCardClick = (id) => {
        const selectedResource = resources.find(resource => resource.id === id);
        if (selectedResource) {
            setSelectedPosition(selectedResource.position); 
        }
    };

    const filteredResources = filter === "all" ? resources : resources.filter(resource => resource.type === filter);

    return (
        <div className="map-page">
            <div className="map-container">
                <MapContainer center={hartfordPosition} zoom={13} className="leaflet-map">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <ResetMapView resetTrigger={resetTrigger} />
                    <MoveToLocation position={selectedPosition} />
                    {filteredResources.map((resource) => (
                        <Marker key={resource.id} position={resource.position}>
                            <Popup>{resource.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

      
            <div className="location-list">
                <div className="list-container">
                    
                  
                    <div className="filters-container">
                        <div className="filters">
                            <button onClick={() => setFilter("all")}>All</button>
                            <button onClick={() => setFilter("government")}>Government</button>
                            <button onClick={() => setFilter("education")}>Schools</button>
                            <button onClick={() => setFilter("medical")}>Hospitals</button>
                        </div>
                    </div>

                 
                    <div className="cards-container">
                        {filteredResources.map((resource) => (
                            <div
                                key={resource.id}
                                className="location-card"
                                onClick={() => handleCardClick(resource.id)}
                            >
                                <h3>{resource.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleResetClick} className="reset-button">Reset Map</button>
            </div>
        </div>
    );
};

export default MapPage;
