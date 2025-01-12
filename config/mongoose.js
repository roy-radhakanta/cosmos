const mongoose = require('mongoose');
const { MONGOOSE_URI } = require('./settings');

mongoose.connect(MONGOOSE_URI);

const db = mongoose.connection;

db.on("error", function(error){
    console.log(`ERROR: While connecting to the Mongoose DB: ${error}`);
});

db.once('open', function(){
    console.log(`DB_CONNECTED: App is connected to the DB`);
});

module.exports = db;