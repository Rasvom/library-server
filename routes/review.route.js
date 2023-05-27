const { Router } = require("express");

const { ReviewController } = require("../controllers/review.controller");

const router = Router();

router.get("/reviews", ReviewController.getReviews);
router.post("/reviews", ReviewController.createReview);
router.delete("/reviews/:id", ReviewController.deleteReview);

module.exports = router;
