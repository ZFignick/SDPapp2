// src/pages/Education.js
import React, { useEffect, useState } from "react";
import { getEducationData } from "../services/educationService";
import "./Education.css";

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEducationData();
        setEducationData(data);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="education-container">
        <h1>Education</h1>
        <table className="education-table">
          <thead>
          <tr>
            <th>School Name</th>
            <th>Performance</th>
            <th>Vaccination Rate</th>
            <th>Resources</th>
          </tr>
          </thead>
          <tbody>
          {educationData.map((school, index) => (
              <tr key={index}>
                <td>{school.school_name}</td>
                <td>{school.performance}</td>
                <td>{school.vaccination_rate}</td>
                <td>{school.resources}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default Education;