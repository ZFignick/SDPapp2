const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const Education = require("../models/Education");

exports.importEducationData = async (req, res) => {
  try {
    const filePath = path.join(
      __dirname,
      "../data/Education_Directory_20241016.csv",
    );
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        try {
          await Education.insertMany(results);
          res
            .status(200)
            .json({ message: "Data imported successfully", data: results });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });
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
