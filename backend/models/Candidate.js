const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: Number, required: true },
  status: { type: String, default: "Applied" },
  resume: { type: String }
});

module.exports = mongoose.model("Candidate", CandidateSchema);
