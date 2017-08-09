function onGoogleSignIn(googleUser) {
"use strict";
	var id_token = {
		"token" : googleUser.getAuthResponse().id_token
	};

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = () => {
		if (this.readyState == 4 && this.status == 200) {
			try{
				var result = JSON.parse(this.responseText);
				if (result.err || !(result.user_id) || !(result.expires)) {
					console.error('Serverside Problem at user authentication');
				} else {
					window.localStorage.user_id = result.user_id;
					window.localStorage.expires = result.expires;
				}
			} catch (err) {
				console.error('Server returned an invalid JSON \r\n It returned: \r\n %s', err);
			}	
		}
	};
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.setRequestHeader("Connection", "close");
	xhttp.open("POST", "/auth/google/", true);
	xhttp.send(JSON.stringify(id_token));
}

function onGoogleSignOut() {
	var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
}