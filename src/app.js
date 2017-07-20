/*
 * Main Server Application utilizing Express 4
 * Author: Nick London <nick.london94@gmail.com>
 */

/**
 * @var express {const} The Express 4 module
 * @var port {const} The port where the server is listening. Set via environment variables (default 3000)
 * @var app {const} The server instance
 * @var api {const} The API module from api.js
 * @var morgan {const} Express logging module
 */
var express = require('express'),
	port = process.env.PORT || process.env.VCAP_APP_PORT || 3000,
	app = express(),
	api = require('./api'),
	morgan = require('morgan');

// enable logging
app.use(morgan('tiny'));

// ensure HTTPS when not on localhost
app.use('/', function(req, res, next) {
	if (!req.secure && !(req.hostname == "localhost")){
		console.log('Redirect to Secure Connection');
		return res.redirect('https://' + req.hostname + req.url);
	}
	return next();
});

// route the api module to host:port/api
app.use('/api/', api);

// route the components loaded via bower to host:port/lib
app.use('/lib/', express.static(__dirname + '\\..\\bower_components/'));
console.info('[INFO] Setting bower static router to %s', __dirname + '\\..\\bower_components/')

	// route server root requests to static folder
app.use('/', express.static(__dirname +	'\\static'));
console.info('[INFO] Setting default static router to %s', __dirname + '\\static\\')

// start server and export instance as module
var exports = module.exports = app.listen(port, function(){
	console.log('Express Server listening on Port %s.', port);
});