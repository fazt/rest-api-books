var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	author: {
		type: String,
		required: true
	},
	publisher: {
		type: String
	},
	pages: {
		type: Number
	},
	image_url: {
		type: String
	},
	buy_url: {
		type: String
	},
	create_data: {
		type: Date,
		default: Date.now
	}
});

const Book = module.exports = mongoose.model('book', bookSchema);

// Get Books
module.exports.getBooks = (cb, limit) => {
	Book.find(cb).limit(limit);
};

module.exports.getBookId = (id, cb) => {
	Book.findById(id, cb);
}

module.exports.addBook = (book, cb) => {
	Book.create(book, cb);
};

module.exports.updateBook = (id, book, options, cb) => {
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	};
	Book.findOneAndUpdate(query, update, options, cb);
};

module.exports.deleteBook = (id, cb) => {
	var query = {_id: id};
	Book.remove(query, cb);
};
