const express = require("express");
const router = express.Router();

const Genre = require("../models/genre");
const Book = require("../models/book");

router.get("/genres", async (req, res) => {
  const genres = await Genre.find();
  return res.json(genres);
});

router.post("/genres", (req, res) => {
  var genre = req.body;

  Genre.addGenre(genre, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

router.put("/genres/:_id", (req, res) => {
  var id = req.params._id;
  var genre = req.body;

  Genre.updateGenre(id, genre, {}, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

router.delete("/genres/:_id", (req, res) => {
  var id = req.params._id;
  Genre.deleteGenre(id, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

router.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.get("/books/:_id", (req, res) => {
  Book.getBookId(req.params._id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

router.post("/books", async (req, res) => {
  try {
    const book = req.body;
    const newBook = await Book.create(book);
    res.json(newBook);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put("/books/:_id", (req, res) => {
  var id = req.params._id;
  var book = req.body;

  Book.updateBook(id, book, {}, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

router.delete("/books/:_id", (req, res) => {
  var id = req.params._id;
  Book.deleteBook(id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

module.exports = router;
