// src/services/educationService.jsx
import axios from "axios";

export const getEducationData = async () => {
  const apiUrl = "https://data.ct.gov/resource/9k2y-kqxn.json";
  const limit = 1000;
  let offset = 0;
  let allData = [];

  try {
    while (true) {
      const response = await axios.get(apiUrl, {
        params: {
          $limit: limit,
          $offset: offset,
        },
      });

      const data = response.data;
      if (data.length === 0) break;

      allData = allData.concat(data);
      offset += limit;
    }

    return allData;
  } catch (error) {
    console.error("Error fetching education data:", error);
    throw error;
  }
};