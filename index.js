const express = require("express");
require("dotenv").config();
const { connection } = require("./db");
const cors = require("cors");
const { jobRouter } = require("./routes/job.route");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/jobs", jobRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Backend");
  } catch (error) {
    console.log(error);
  }
  console.log("Listening to PORT");
});
