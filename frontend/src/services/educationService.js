import axios from "axios";

const API_URL = "/api/education/education";

export const getEducationData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching education data:", error);
    throw error;
  }
};
