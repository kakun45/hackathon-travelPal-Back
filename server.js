// BACKEND!
const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const { PORT } = process.env;
app.use(cors());
app.use(express.json());
const { readData } = require("./controllers/controllers");

app.get("/:zipId", (req, res) => {
  const { zipId } = req.params;
  let data = readData();
  // filter out selected zipcode
  data = data.filter((obj) => obj.zipcode === zipId);
  res.status(200).json(data);
});

// static endpoint for images
app.use("/images", express.static("./public/images"));

app.listen(PORT || 8000, () => {
  console.log("Server is up 👍 on " + PORT || 8000);
});
