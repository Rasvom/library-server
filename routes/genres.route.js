const { Router } = require("express");

const { GenreController } = require("../controllers/genres.controller");

const router = Router();

router.get("/genres", GenreController.getGenres);
router.post("/genres", GenreController.createGenre);
router.delete("/genres/:id", GenreController.deleteGenre);

module.exports = router;
