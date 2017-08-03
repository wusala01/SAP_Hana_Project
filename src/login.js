var express = require('express'),
	login = express(),
	Plugins = require('js-plugins'),
	pluginManager = new Plugins(),
	path = require('path'),
	connectors;
	
login.set('view engine', 'ejs');

pluginManager.scanSubdirs([path.resolve(__dirname, '../plugins/') + path.sep]);

pluginManager.connect(login, 'litter:auth', {
	data: {
		scope: "email"
	},
	multi: true,
	required: true
}, (err, extensions, names) => {
	"use strict";
	if (err) console.error(err);
	else if (extensions instanceof Array) connectors = [ extensions ];
	else connectors = extensions;
	if (names) console.info(JSON.stringify(extensions, null, 2));
	console.log(Object.getOwnPropertyNames(extensions[0]).filter(function (p) {
		return typeof extensions[0][p] === 'function';
	}));
});

login.use('/', (req, res) => {
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
	res.render('partials/login', data);
});

var exports = module.exports = login;