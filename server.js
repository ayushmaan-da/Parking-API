const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// load JSON
const ParkSimulator = require("./ParkingSlot.json");

// routes
app.get("/", (req, res) => {
  res.send("API working 🚀");
});

app.get("/slots", (req, res) => {
  res.json(data);
});

// IMPORTANT for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});