const { Router } = require("express");

const { BookController } = require("../controllers/books.controller");

const router = Router();

router.get("/books", BookController.getBooks);
router.get("/books/:id", BookController.getBookById);
router.get("/books/genre/:id", BookController.getBookByGenreId);
router.post("/books", BookController.createBook);
router.delete("/books/:id", BookController.deleteBook);
router.patch("/books/:id", BookController.patchBook);

module.exports = router;
