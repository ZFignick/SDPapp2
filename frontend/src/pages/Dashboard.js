import React, { useEffect, useState } from "react";
import { getWellbeingScore } from "../services/WellbeingService";
import ResourceMap from "../components/ResourceMap";
import "../components/Dashboard.css";

const Dashboard = () => {
  const [score, setScore] = useState(null);
  const [year, setYear] = useState(2023); // Default year

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const data = await getWellbeingScore(year);
        setScore(data.score);
      } catch (error) {
        console.error("Error fetching wellbeing score:", error);
      }
    };

    fetchScore();
  }, [year]);

  return (
    <div className="dashboard">
      <h1>Wellbeing Dashboard</h1>
      <div>
        <label htmlFor="year">Select Year: </label>
        <select
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          {/* Add more years as needed */}
        </select>
      </div>
      <div>
        <h2>Aggregated Wellbeing Score for {year}</h2>
        {score !== null ? <p>{score}</p> : <p>Loading...</p>}
      </div>
      <div>
        <h2>Local Resources</h2>
        <ResourceMap />
      </div>
    </div>
  );
};

export default Dashboard;
