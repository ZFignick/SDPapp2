const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
  schoolName: String,
  performance: Number,
  vaccinationRate: Number,
  resources: String,
  // Add other fields as necessary
});

module.exports = mongoose.model("Education", EducationSchema);
