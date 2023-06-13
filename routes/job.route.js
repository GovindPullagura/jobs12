const express = require("express");
const { JobModel } = require("../models/job.model");

const jobRouter = express.Router();

jobRouter.get("/", async (req, res) => {
  const { role, page, language, limit } = req.query;

  try {
    if (role && language) {
      let data = await JobModel.find({ role: role, language: language })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(data);
    } else if (language) {
      let data = await JobModel.find({ language })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(data);
    } else if (role) {
      let data = await JobModel.find({ role: role })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(data);
    } else {
      let data = await JobModel.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(data);
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

jobRouter.post("/add", async (req, res) => {
  try {
    const newJob = new JobModel(req.body);
    await newJob.save();
    res.send("Job posted successfully.");
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { jobRouter };
