const Genre = require("../models/Genre.model");

module.exports.GenreController = {
  getGenres: async (req, res) => {
    try {
      const data = await Genre.find();
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ощибка при выводе жанров`);
    }
  },
  createGenre: async (req, res) => {
    try {
      await Genre.create({
        genre: req.body.genre,
        description: req.body.description,
      });
      res.json("Genre add");
    } catch (error) {
      res.json(`${error}: Ощибка при создании жанра`);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      await Genre.findByIdAndDelete(req.body.id);
      res.json("Genre delete");
    } catch (error) {
      res.json(`${error}: Ощибка при удалении жанра`);
    }
  },
};
