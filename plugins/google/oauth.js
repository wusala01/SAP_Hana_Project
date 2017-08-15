var exports = module.exports = function factory(data, host, options){
	"use strict";
	var client_id = process.env.google_client_id || undefined,
		auth_uri = process.env.google_auth_uri || undefined,
		token_uri = process.env.google_token_uri || undefined,
		client_secret = process.env.google_client_secret || undefined,
		email_uri = process.env.google_email_uri || undefined;
		
	return {		
		setKeys: {
			client_id: client_id,
			response_type: "code",
			scope: "profile email",
			include_granted_scopes: "false",
			access_type: "online"
		},
		
		stateKey: "state",
		
		redirect: "redirect_uri",
		
		windowName: "Login with Google",
		
		path: auth_uri,
		
		response: {
			token: "code",
			error: "error"
		},
		
		tokenExchange: {
			path : token_uri,
			
			setKeys: {
				client_id: client_id,
				client_secret: client_secret,
				grant_type: "authorization_code"
			},
			
			tokenKey: "code",
			
			redirect: "redirect_uri",
			
			propagateState: false,
			
			response: {
				accessToken: "access_token"
			}
		},
		
		emailRetrieve: {
			path: email_uri,
			
			accessToken: "access_token",
			
			response: {
				email: "emails[0].value"
			}
		}
		
	};
};