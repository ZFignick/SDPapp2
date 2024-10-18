const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");

router.get("/import-education", educationController.importEducationData);
router.get("/education", educationController.getEducationData);

module.exports = router;
