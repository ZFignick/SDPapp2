const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/wellbeing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const dataRoutes = require("./routes/dataRoutes");
const wellbeingRoutes = require("./routes/wellbeingRoutes");
const educationRoutes = require("./routes/educationRoutes");
app.use("/api/data", dataRoutes);
app.use("/api/wellbeing", wellbeingRoutes);
app.use("/api/education", educationRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

module.exports = app;
