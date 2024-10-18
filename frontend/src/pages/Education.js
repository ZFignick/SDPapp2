// src/pages/Education.js
import React, { useEffect, useState } from "react";
import { getEducationData } from "../services/educationService";

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
    <div>
      <h1>Education</h1>
      <table>
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
              <td>{school.schoolName}</td>
              <td>{school.performance}</td>
              <td>{school.vaccinationRate}</td>
              <td>{school.resources}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Education;
