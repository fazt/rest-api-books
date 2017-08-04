const Genre = require('./models/genre');

const { dbConnection } = require('./config.json');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConnection, {
	useMongoClient: true
});

var genres = [
	new Genre({
		name: 'Science Fiction'
	}),

	new Genre({
		name: 'Short Stories'
	})
];

var done = 0;
for(let i = 0; i < genres.length; i++) {
	genres[i].save((err, result) => {
		done++;
		if(done === genres.length) {
			exit();
		} 
	});
}

function exit() {
	mongoose.disconnect();
}
