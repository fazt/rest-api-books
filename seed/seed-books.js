const Book = require('./models/book');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const { dbConnection } = require('./config.json');
mongoose.connect(dbConnection, {
	useMongoClient: true
});

var books = [
	
	new Book({
		 title: 'I, Robot',
		 genre: 'Science Fiction',
		 description: "The three laws of Robotics: 1) A robot may not injure a human being or, through inaction, allow a human being to come to harm. 2) A robot must obey orders given to it by human beings except where such orders would conflict with the First Law. 3) A robot must protect its own existence as long as such protection does not conflict with the First or Second Law. With these three, simple directives, Isaac Asimov changed our perception of robots forever when he formulated the laws governing their behavior. In I, Robot, Asimov chronicles the development of the robot through a series of interlinked stories: from its primitive origins in the present to its ultimate perfection in the not-so-distant future--a future in which humanity itself may be rendered obsolete. Here are stories of robots gone mad, of mind-read robots, and robots with a sense of humor. Of robot politicians, and robots who secretly run the world--all told with the dramatic blend of science fact and science fiction that has become Asimov's trademark.",
		 author: 'Isaac Asimov',
		 pages: '255',
		 publisher: 'Spectra',
		 image_url: 'https://images.gr-assets.com/books/1388321463l/41804.jpg',
		 buy_url: 'https://www.goodreads.com/book/show/41804.I_Robot'
	})
];

var done = 0;
for(let i = 0; i < books.length; i++) {
	books[i].save((err, result) => {
		done++;
		if(done === books.length) {
			exit();
		} 
	});
}

function exit() {
	mongoose.disconnect();
}
