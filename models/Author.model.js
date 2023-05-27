const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
  author: String,
  description: String,
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
