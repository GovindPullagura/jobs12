const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    company: String,
    city: String,
    location: String,
    level: String,
    role: String,
    contract: String,
    position: String,
    language: String,
  },
  { versionKey: false }
);

const JobModel = mongoose.model("job", jobSchema);

module.exports = { JobModel };
