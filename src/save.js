const Promise = require('bluebird'),
	github = require('octonode'),
	converter = require('biblatex-csl-converter'),
	token = process.env.GIT_TOKEN;

class GithubLatexGateway {
	constructor(config){
		"use strict";
		if (!(config && config.user && config.path && config.repo)) throw new Exception("Config is missing or does not contain required fields.");
		this.auth = config.auth || token;
		this.path = config.path;
		this.repoName = config.repo;
		this.user = config.user;
		this.owner = config.owner || config.user;
		this.client = github.client(this.auth);
		this.repo = this.client.repo(this.owner + '/' + this.repoName);
	}
	
	export(bibDB, SHA) {
		"use strict";
		var self = this;
		return new Promise((resolve, reject) => {
			Promise.fromCallback((cb) => {
				var exporter = new converter.BibLatexExporter(bibDB);
				var biblatex = exporter.output;
				self.repo.updateContents(
					self.path,
					'Litter Commit ' + new Date(),
					biblatex,
					SHA,
					cb
				);
			}).then((info) => {
				resolve(info.content.sha);
			}).catch((err) => {
				reject(err);			
			});
		});
	}
	
	exportNew(bibDB) {
		"use strict";
		var self = this;
		return new Promise((resolve, reject) => {
			Promise.fromCallback((cb) => {
				var exporter = new converter.BibLatexExporter(bibDB);
				var biblatex = exporter.output;
				self.repo.createContents(
					self.path,
					'Litter Commit ' + new Date(),
					biblatex,
					cb
				);
			}).then((info) => {
				resolve(info.content.sha);
			}).catch((err) => {
				reject(err);
			});
		});
	}
	
	import(){
		"use strict";
		var self = this;
		return new Promise((resolve, reject) => {
			Promise.fromCallback((cb) => {
				self.repo.contents(self.path, cb);
			}).then((info) => {
				var bibString = Buffer
					.from(info.content, info.encoding)
					.toString('utf8');
				var parser = new converter.BibLatexParser(bibString, {
				processUnexpected: true,
				processUnknown: {
					collaborator: 'l_name'
				}
				});
				var bibDB = parser.output;
				if (parser.errors.length) {
					console.log(parser.errors);
				}
				resolve(bibDB, info.sha);
			}).catch((err) => {
				reject(err);
			});
		});
	}
}

var exports = module.exports = GithubLatexGateway;