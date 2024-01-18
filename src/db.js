const { dbConnection } = require("./config.json");

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(dbConnection)
.then((db) => console.log(`db connected!`))
.catch(err => console.log(`db error: ${err.message}`));