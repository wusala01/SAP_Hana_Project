/*
 * API instance
 * Author: Nick London <nick.london94@gmail.com>
 */

/**
 * @var express {const} The Express 4 module
 * @var api {const} the API instancce
 */
var express = require('express'),
	api = express(), 
	Promise = require('bluebird'),
	git = require('./save');

// route the api module to host:port/api
api.get('/users/:id/', function(req, res){
	var dummy = new git({
		"auth": {
			id: req.params.id,
			secret: "7821f8feeed68fb1e00c28d74bedb63b721baace"
		},
		"path": "lala.bib",
		"repo": "dummy",
		"user": "wusala01"
	});
	dummy.import().then(result => {
		
		res.end(JSON.stringify(result, null, 2));
		
	});
});


var exports = module.exports = api;