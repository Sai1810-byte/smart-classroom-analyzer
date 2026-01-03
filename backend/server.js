const express = require("express");
const cors = require("cors");

const analyzeSession = require("./analysisEngine");
const mockData = require("./mockData");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/session", (req, res) => {
  const analysis = analyzeSession(mockData);
  res.status(200).json(analysis);
});

const PORT = 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});


