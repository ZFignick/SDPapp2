// backend/api/educationController.js
const axios = require("axios");
const Education = require("../models/Education");

exports.importEducationData = async (req, res) => {
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

        await Education.insertMany(allData);
        res.status(200).json({ message: "Data imported successfully", data: allData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEducationData = async (req, res) => {
    try {
        const data = await Education.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};