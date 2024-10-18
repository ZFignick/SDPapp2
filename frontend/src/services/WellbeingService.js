// src/services/wellbeingService.js
import axios from "axios";

const API_URL = "/api/wellbeing/wellbeing-score";

export const getWellbeingScore = async (year) => {
  try {
    const response = await axios.get(`${API_URL}/${year}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching wellbeing score:", error);
    throw error;
  }
};
