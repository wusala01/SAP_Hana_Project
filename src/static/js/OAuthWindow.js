function OAuth(target){
	"use strict";
	var that = {};
	that._oauthWindow = window.open('/authorize/' + target.toLowerCase(), "Login with " + target);
	that._oauthInterval = window.setInterval(function(){
		if (that._oauthWindow.closed) {
			window.clearInterval(that._oauthInterval);
			window.location.reload();
		}
	}, 0);
}
(function initLogin(){
	for (var i = logins.length -1 ; i > -1 ; i--){
		document.getElementById('login-' + logins[i]).addEventListener("click", function(event){
			event.preventDefault();
			var target = this.id.slice(6 - this.id.length);
			
			console.log("Login clicked " + target);
			OAuth(target);
			return false;
		});
	}
})();