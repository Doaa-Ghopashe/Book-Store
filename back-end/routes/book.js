const express = require("express");
const bookRouter = express.Router();
const bookController = require("../controllers/bookController.js");
const { validate } = require("../Middleware/validation/validator.js");
const {
  addBookValidateRule,
  updateBookValidateRule,
} = require("../validators/validator.js");



const multer = require("multer");
const { multerFilter, multerStorageBook } = require("../Middleware/upload.js");

const upload = multer({
  fileFilter: multerFilter,
  storage: multerStorageBook,
});
bookRouter.get("/", upload.single("photo"), bookController.getAllBooks);
bookRouter.get("/:id", bookController.getOneBook);

bookRouter.post(
  "/",
  upload.single("photo"),
  validate(addBookValidateRule),
  bookController.addNewBook
);
bookRouter.put(
  "/:id",
  validate(updateBookValidateRule),
  bookController.editBook
);

bookRouter.delete("/:id", bookController.deleteBook, (req, res) => {});
bookRouter.delete("/", bookController.deleteAllBooks);

module.exports = bookRouter;
