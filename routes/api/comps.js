const router = require("express").Router();
const compController = require("../../controllers/compController");

// Matches with "/api/books"
router.route("/")
  .get(compController.findAll)
  .post(compController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(compController.findById)
  .put(compController.update)
  .delete(compController.remove);

module.exports = router;
