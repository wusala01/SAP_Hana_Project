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
	Promise = require('bluebird');

// route the api module to host:port/api
api.get('/users/:id/', function(req, res){
	res.end('Not implemented.');
});


var exports = module.exports = api;