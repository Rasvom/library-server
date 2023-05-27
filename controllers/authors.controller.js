const Author = require("../models/Author.model");

module.exports.AuthorController = {
  getAuthor: async (req, res) => {
    try {
      const data = await Author.find();
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при выводе авторов`);
    }
  },
  createAuthor: async (req, res) => {
    try {
      await Author.create({
        author: req.body.author,
        description: req.body.description,
      });
      res.json("Author add");
    } catch (error) {
      res.json(`${error}: Ошибка при создании автора`);
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      await Author.findByIdAndDelete(req.body.id);
      res.json("Author delete");
    } catch (error) {
      res.json(`${error}: Ошибка при удаление автора`);
    }
  },
  patchAuthor: async (req, res) => {
    try {
      await Author.findByIdAndUpdate(req.body.id, {
        author: req.body.author,
        description: req.body.description,
      });
      res.json("Author edit");
    } catch (error) {
      res.json(`${error}: Ошибка при редактировании автора`);
    }
  },
};
