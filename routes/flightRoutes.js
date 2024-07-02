const express = require("express");
const { calculateFlightPath } = require("../controllers/flightController");

const router = express.Router();

router.post("/calculate", calculateFlightPath);

module.exports = router;
