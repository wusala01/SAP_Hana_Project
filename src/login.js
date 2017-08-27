var Plugins = require('js-plugins'),
	pluginManager = new Plugins(),
	path = require('path'),
	connectors;

new Promise((resolve, reject) => {
	pluginManager.scanSubdirs([path.resolve(__dirname, '../plugins/') + path.sep]);

	pluginManager.connect(undefined, 'litter:auth', {
		multi: true,
		required: true
	}, (err, extensions, name) => {
		"use strict";
		var names;
		
		if (err) reject(err);
		else if (!(extensions instanceof Array)) { 
			connectors = [ extensions ];
			names = [name];
		} else {
			connectors = extensions;
			names = name;
		}
		
		var result = {};
		for (var i = connectors.length - 1; i > -1; i--){
			result[names[i]] = connectors[i];
		}
		resolve(result);
	});
}).then((result) => {
	exports.extensions = module.exports.extensions = result;
}).catch((err) => {
	console.error(err);
});