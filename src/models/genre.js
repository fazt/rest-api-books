var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
	name: {
		type: 'String',
		required: true
	},
	create_data: {
		type: Date,
		default: Date.now
	}
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

module.exports.addGenre = (genre, cb) => {
	Genre.create(genre, cb);
};

module.exports.updateGenre = (id, genre, options, cb) => {
	var query = {_id: id};
	var update = {
		name: genre.name
	};
	Genre.findOneAndUpdate(query, update, options, cb);
};

module.exports.deleteGenre = (id, cb) => {
	var query = {_id: id};
	Genre.remove(query, cb);
};
