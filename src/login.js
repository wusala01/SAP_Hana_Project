var express = require('express'),
	login = express(),
	bodyParser = require('body-parser'),
	Plugins = require('js-plugins'),
	pluginManager = new Plugins(),
	path = require('path'),
	connectors;

	
login.set('view engine', 'ejs');
login.use(bodyParser.json());

pluginManager.scanSubdirs([path.resolve(__dirname, '../plugins/') + path.sep]);


pluginManager.connect(login, 'litter:auth', {
	data: {
		scope: "email"
	},
	multi: true,
	required: true
}, (err, extensions, name) => {
	"use strict";
	var names;
	if (err) console.error(err);
	else if (!(extensions instanceof Array)) { 
		connectors = [ extensions ];
		names = [name];
	} else {
		connectors = extensions;
		names = name;
	}
	
	for (var i = connectors.length - 1; i > -1; i--){
		console.log(Object.getOwnPropertyNames(extensions[i]).filter(function (p) {		
				return typeof extensions[i][p] === 'function';		
		}));
		login.post('/' + names[i] + '/', connectors[i].handleRequest.bind(connectors[i]));
	}
});

var exports = module.exports = login;