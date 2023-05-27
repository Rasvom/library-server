const Book = require("../models/Book.model");

module.exports.BookController = {
  getBooks: async (req, res) => {
    try {
      const data = await Book.find().populate("authorId genreId", "-_id");
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при выводе книг`);
    }
  },
  getBookById: async (req, res) => {
    try {
      const data = await Book.findById(req.body.id).populate(
        "authorId genreId"
      );
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при выводе книги`);
    }
  },
  getBookByGenreId: async (req, res) => {
    try {
      const data = await Book.findById({ genreId: req.body.genreId }).populate(
        "authorId genreId"
      );
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при выводе книги`);
    }
  },
  createBook: async (req, res) => {
    try {
      await Book.create({
        book: req.body.book,
        authorId: req.body.authorId,
        genreId: req.body.genreId,
      });
      res.json("Book add");
    } catch (error) {
      res.json(`${error}: Ошибка при создании книги`);
    }
  },
  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.body.id);
      res.json("Book delete");
    } catch (error) {
      res.json(`${error}: Ошибка при удаление книги`);
    }
  },
  patchBook: async (req, res) => {
    try {
      await Book.findByIdAndUpdate(req.body.id, {
        book: req.body.book,
        authorId: req.body.authorId,
        genreId: req.body.genreId,
      });
      res.json("Book edit");
    } catch (error) {
      res.json(`${error}: Ошибка при редактировании книги`);
    }
  },
};
