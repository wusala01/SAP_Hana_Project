var exports = module.exports = function factory(data, host, options){
	"use strict";
	var client_id = process.env.github_client_id || undefined,
		auth_uri = process.env.github_auth_uri || undefined,
		token_uri = process.env.github_token_uri || undefined,
		client_secret = process.env.github_client_secret || undefined,
		email_uri = process.env.github_email_uri || undefined;
	
	// Configuration
	return {		
		setKeys: {
			client_id: client_id,
			scope: "user",
			include_granted_scopes: "false"
		},
		
		stateKey: "state",
		
		redirect: "redirect_uri",
		
		windowName: "Login with Github",
		
		path: auth_uri,
		
		response: {
			token: "code",
			error: "error"
		},
		
		tokenExchange: {
			path : token_uri,
			
			setKeys: {
				client_id: client_id,
				client_secret: client_secret
			},
			
			tokenKey: "code",
			
			redirect: "redirect_uri",
			
			propagateState: true,
			
			stateKey: "state",
			
			response: {
				accessToken: "access_token"
			}
		},
		
		emailRetrieve: {
			path: email_uri,
			
			accessToken: "access_token",
			
			response: {
				email: "[0].email"
			}
		},
		
		mandatoryHeaders: {
			'Accept': 'application/json',
			'User-Agent': 'wusala01/SAP_Hana_Project'
		}
		
	};
};