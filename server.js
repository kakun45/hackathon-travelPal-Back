// BACKEND! NO local Storage
const express = require("express");
const app = express();
const cors = require("cors");


require("dotenv").config();

const { PORT } = process.env;
app.use(cors());
app.use(express.json());


App.listen();