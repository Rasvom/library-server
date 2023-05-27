const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  description: String,
  name: String,
  bookId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Book",
  },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
