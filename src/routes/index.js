const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send(`
		please go to <a href="/api/books">/api/books</a>
		or /api/book/:id
	`);
});

module.exports = router;
