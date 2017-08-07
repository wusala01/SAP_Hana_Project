function onGoogleSignIn(googleUser) {
"use strict";
	var id_token = {
		"token" : googleUser.getAuthResponse().id_token
	};

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			try{
				var result = JSON.parse(this.responseText);
				if (result.err) console.error(result.err);
				else if (!(result.user_id)) console.error('Invalid input data: user_id missing');
				else if (!(result.expires)) console.error('Invalid input data: expires missing');
				else if (result.expires < (Date.now() / 1000 | 0)) console.error('Token expired');
				else {
					window.localStorage.user_id = result.user_id;
					window.localStorage.expires = result.expires;
				}
			} catch (err) {
				console.error('Server returned an invalid JSON \r\n It returned: \r\n %s', err);
			}	
		}
	};
	xhttp.open("POST", "/auth/google/", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(id_token));
}

function onGoogleSignOut() {
	var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
}