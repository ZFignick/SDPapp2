// src/pages/Housing.jsx
import React, { useState }  from "react";
import HousingTable from "../components/HousingTable.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Housing = () => {
  const hartfordPosition = [41.7658, -72.6734]; // Coordinates for Hartford, Connecticut
  const [filter, setFilter] = useState("all");

  const resources = [
    { type: "family", position: [41.7904774, -72.6817872], name: "Jackie Schaeffer Apartments", address:"711 Garden Street, Hartford" },
    { type: "family", position: [41.755018, -72.674402], name: "Wethersfield Commons", address:"32-34 & 36-38 Wethersfield Avenue, Hartford" },
    { type: "family", position: [41.7861232, -72.6780693], name: "Generations Campus", address:"35 Clark Street, Hartford" },
    { type: "senior", position: [41.801717, -72.6948399], name: "Coventry Place (Senior)", address:"160 Coventry Street, Bloomfield" },
    { type: "senior", position: [41.7861209, -72.6780274], name: "St. Michael's (Senior)", address:"35 Clark Street, Hartford" },
    { type: "resource", position: [41.7811648, -72.6724596], name: "Community Renewal Team (Resources)", address:"555 Windsor Street, Hartford" },
    
];
  // TODO - add links and descriptions to housing info above/below map:
  // CRT: https://www.crtct.org/ 
  // affordable housing: https://www.crtct.org/programs/housing-shelters/affordable-housing/
  // senior housing: https://www.crtct.org/programs/seniors/senior-affordable-housing/

  const filteredResources = filter === "all" ? resources : resources.filter(resource => resource.type === filter);

  return (
    <div>
      <h1>Housing</h1>
      {/* <HousingTable /> */}
      <h1 className="text-blue-200 text-3xl font-extrabold mt-10 mb-5 flex justify-center items-center">Housing
                Resources</h1>
            <div className="filters">
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("family")}>Family</button>
                <button onClick={() => setFilter("senior")}>Senior</button>
                <button onClick={() => setFilter("resource")}>Resources</button>
            </div>
            <div className="map-container">
                <MapContainer center={hartfordPosition} zoom={13} style={{height: "500px", width: "500px"}}>
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

export default Housing;
