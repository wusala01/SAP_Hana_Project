require('dotenv').load();
var server = require('./build/app');

process.stdin.resume();

function exitHandler(err) {
	server.close();
    if (err) console.error(err.stack);
	process.exit();
}

//do something when app is closing
process.on('exit', exitHandler);

//catches ctrl+c event
process.on('SIGINT', exitHandler);

//catches uncaught exceptions
process.on('uncaughtException', exitHandler);
 