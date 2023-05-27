const Review = require("../models/Review.model");

module.exports.ReviewController = {
  getReviews: async (req, res) => {
    try {
      const data = await Review.find({ bookId: req.body.bookId }).populate(
        "bookId",
        "-_id -authorId -genreId"
      );
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при выводе рецензий`);
    }
  },
  createReview: async (req, res) => {
    try {
      const data = await Review.create({
        description: req.body.description,
        name: req.body.name,
        bookId: req.body.bookId,
      });
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при создании рецензии`);
    }
  },
  deleteReview: async (req, res) => {
    try {
      const data = await Review.findByIdAndDelete(req.body.id);
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при удалении рецензии`);
    }
  },
};
