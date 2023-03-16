// BACKEND! NO local Storage
const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const { PORT } = process.env;
app.use(cors());
app.use(express.json());
const { readData } = require("./controllers/controllers");
const router = express.Router();

app.get("/:zipId", (req, res) => {
  const { zipId } = req.params;
  let data = readData();
  console.log(data);
  data = data.filter((obj) => obj.zipcode === zipId);
  res.status(200).json(data);
});

app.listen(PORT || 8080, () => {
  console.log("Server is up 👍 on " + PORT || 8000);
});
