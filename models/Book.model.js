const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  book: String,
  authorId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Author",
  },
  genreId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Genre",
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
