const express = require('express');
const router = express.Router();

const Genre = require('../models/genre');
const Book = require('../models/book');

router.get('/genres', (req, res) => {
	Genre.getGenres((err, genres) => {
		if (err) {
			throw err;
		}
		res.json(genres);
	});
});

router.post('/genres', (req, res) => {
	var genre = req.body;

	Genre.addGenre(genre, (err, genre) => {
		if (err) {
			throw err;
		}
		res.json(genre);
	});
});

router.put('/genres/:_id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;

	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if (err) {
			throw err;
		}
		res.json(genre);
	});
});

router.delete('/genres/:_id', (req, res) => {
	var id = req.params._id;
	Genre.deleteGenre(id, (err, genre) => {
		if(err) {
			throw err;
		}
		res.json(genre);
	});
});

router.get('/books', (req, res) => {
	Book.getBooks((err, books) => {
		if(err) {
			throw err;
		}
		res.json(books);
	});
});

router.get('/books/:_id', (req, res) => {
	Book.getBookId(req.params._id, (err, book) => {
		if(err) {
			throw err;
		}
		res.json(book);
	});
});

router.post('/books', (req, res) => {

	var book = req.body;

	Book.addBook(book, (err, book) => {
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

router.put('/books/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;

	Book.updateBook(id, book, {}, (err, book) => {
		if (err) {
			throw err;
		}
		res.json(book);
	});
});

router.delete('/books/:_id', (req, res) => {
	var id = req.params._id;
	Book.deleteBook(id, (err, book) => {
		if(err) {
			throw err;
		}
		res.json(book);
	});
});

module.exports = router;
