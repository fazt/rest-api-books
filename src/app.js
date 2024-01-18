const express = require('express');
const app = express();

// Mongodb Settings
const { dbConnection } = require('./config.json')

// Mongodb Connection
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(dbConnection)
.then((db) => console.log(`db connected!`))
.catch(err => console.log(`db error: ${err.message}`));

// settings
app.set('port', 3000);
app.set('json spaces', 4);

// middlewares
app.use(express.json());

// routes
const indexRoutes =require('./routes/index');
const apiRoutes =require('./routes/api_v1');

app.use('/', indexRoutes);
app.use('/api', apiRoutes);

app.listen(app.get('port'), () => {
	console.log('server running on port', 3000);
});
