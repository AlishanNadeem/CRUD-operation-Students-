const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

let studentSchema = new Schema({
  stdName: { type: String },
  stdAge: { type: Number },
  stdClass: { type: Number },
  stdNumber: { type: Number },
  stdAddress: { type: String },
  history: { type: Array },
});

module.exports = mongoose.model("Student", studentSchema);
