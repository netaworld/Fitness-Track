const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  body: String,
  title: String
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
