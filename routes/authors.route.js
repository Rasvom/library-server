const { Router } = require("express");

const { AuthorController } = require("../controllers/authors.controller");

const router = Router();

router.get("/authors", AuthorController.getAuthor);
router.post("/authors", AuthorController.createAuthor);
router.delete("/authors/:id", AuthorController.deleteAuthor);
router.patch("/authors/:id", AuthorController.patchAuthor);

module.exports = router;
