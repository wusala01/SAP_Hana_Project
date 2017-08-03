var assert = require('assert'),
	Promise = require('bluebird'),
	GoogleAuth = require('google-auth-library'),
	auth = new GoogleAuth(),
	fs = require('fs'),
	path = require('path');

const html_login_template = '<div class="g-signin2" data-onsuccess="{{callback}}" data-theme="dark"></div>',
	html_scope_template = '<meta name="google-signin-scope" content="{{scope}}">',
	html_client_template = '<meta name="google-signin-client_id" content="{{client_id}}">',
	html_script_template = '<script>{{script}}</script>';
	library_source = 'https://apis.google.com/js/platform.js',
	clientjs = path.resolve(__dirname, "./client.js");
	
/**
 * @param data [Object] configuration data
 * @param host [Object]	Express configuration
 * @param options [Object] standard config information
 */
var exports = module.exports = function factory(data, host, options){
	"use strict";
	// Assertions
	var secret = process.env.GOOGLE_SECRET || undefined;
	
	assert(secret, 'The Client Secret provided by Google is missing. Must be provided in environment @ GOOGLE_SECRET');
	assert(data.scope, 'Google Signin Scope is misssing, please add according to google documentation');
	if (!fs.existsSync(path.resolve(__dirname, "./client.js"))) throw new Error('Frontend Script missing - Package corrupted');
	
	// Configuration
	var result = {
		client_id: secret,
		client: new auth.OAuth2(secret, '', ''),
		scope: data.scope,
		
		validate: function(token){
			return new Promise( (resolve, reject) => {
				Promise.fromCallback( cb => {
					this.client.verifyIdToken(token, this.client_id, cb);
				}).then( login => {
					var payload = login.getPayload(),
						userid = payload['sub'],
						expires = Number.parseInt(payload['exp']),
						valid = Number.parseInt(payload['iat']),
						now = Date.now() / 1000 | 0;
					if(expires > now && now > valid)
						resolve(userid, expires);
					else reject(new Error('Token expired'));
				}).catch(reject);
			});	
		},
		
		handleRequest: function(req, res){
			res.set('Content-Type', 'application/json');
			var token = req.body.token || undefined;
			if (token === undefined) res.end(400, "{\"error\": \"Token missing\"}");
			else validate(token)
				.then( (userid, expires) => {
					var obj = {};
					obj.user_id = userid;
					obj.expires = expires;
					res.end(200, JSON.stringify(obj));
				}).catch( err => {
					var obj = {};
					obj.error = err;
					res.end(500, JSON.stringify(obj));
				});
		},
		
		getHead: function(){
			return [
				html_scope_template.replace("{{scope}}", this.scope),
				html_client_template.replace("{{client_id}}", this.client_id),
				html_script_template.replace("{{script}}", fs.readFile(clientjs, {
					encoding: "utf8"
				}))
			];
		},
		
		getBody: function(){
			return [ html_login_template.replace("{{callback}}", "onGoogleSignIn") ];
		},
		
		getLogout: function(){
			return "onGoogleSignOut";
		}
	};
	
	// Setup
	host.use('/google/', result.handleRequest);
	
	// Return
	return result;
};