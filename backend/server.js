// backend/server.js or backend/app.js
const express = require("express");
const mongoose = require("mongoose");
const educationRoutes = require("./routes/EducationRoutes");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/education");

app.use(express.json());

// Use the education routes
app.use("/api", educationRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});