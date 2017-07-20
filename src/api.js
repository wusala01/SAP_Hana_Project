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
	token = process.env.GIT_TOKEN,
	Promise = require('bluebird');

// route the api module to host:port/api
api.get('/users/:id/', function(req, res){
	res.end('Not implemented.');
});

api.get('/github/status', function(req, res){
	var github = require('octonode'),
	client = github.client(token);
	console.info(JSON.stringify(client, null, 2));
	
	Promise.fromCallback(function(cb) {
	  client.me().repos(cb);
	}).then(function(data, headers){
		var obj = { "data" : data, "headers" : headers };
		res.end(JSON.stringify(obj, null, 2));
	}).catch(function(err){
		res.end('error occured. look at system log.');
		console.error(err);
	});
});

var exports = module.exports = api;