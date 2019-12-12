const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  author: String,
  title: String
});

const Exercise = mongoose.model("Exercise", BookSchema);

module.exports = Exercise;
