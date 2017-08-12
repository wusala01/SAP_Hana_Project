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
	
	login._router.stack.forEach(function(r){
	  if (r.route && r.route.path){
		console.log(r.route.path);
	  }
	});
});

login.get('/', (req, res) => {
	"use strict";
	var l =  connectors.length;
	var data = {};
	data.head = [];	
	data.body = [];
	data.logout = [];
	var i;
	for (i = 0; i < l; i++){
		data.head = data.head.concat(connectors[i].getHead());
		data.body = data.body.concat(connectors[i].getBody());
		data.logout = data.logout.concat(connectors[i].getLogout());
	}
	res.set('Content-Type', 'text/html');
	res.render(path.resolve(__dirname, './partials/login'), data);
});

var exports = module.exports = login;