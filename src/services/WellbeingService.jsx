// src/services/WellbeingService.jsx
import axios from "axios";

export const getWellbeingScore = async (year) => {
  const apiUrl = `https://api.example.com/wellbeing/${year}`;

  try {
    const response = await axios.get(apiUrl);
    // Ensure the response data contains the expected properties
    const { score, months, scores } = response.data;
    return { score, months, scores };
  } catch (error) {
    console.error("Error fetching wellbeing score:", error);
    throw error;
  }
};