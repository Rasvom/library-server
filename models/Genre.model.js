const mongoose = require("mongoose");

const GenreSchema = mongoose.Schema({
  genre: String,
  description: String,
});

const Genre = mongoose.model("Genre", GenreSchema);

module.exports = Genre;
