function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
	  .toUpperCase();
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

class OAuth{
	constructor(options) {
		this.windowName = options.windowName || 'ConnectWithOAuth';
		this.path = options.path;
		this.callback = options.callback || function(){ 
			window.location.reload();
		};
		this.setKeys = options.setKeys || {};
		this.stateKey = options.stateKey || undefined;
		this.stateValidator = options.stateValidator || undefined;
	}
	
	open(){
		var that = this;
		
		var path = this.path;
		
		path += Object.keys(this.setKeys).map((key) => { 
			if(typeof a[key] == Array) return key + "=" + this.setKeys[key].join(encodeURIComponent(" ");
			else return key + "=" + encodeURIComponent(this.setKeys[key]); 
		}).join('&');
		
		var state;
		
		if (this.stateKey !== undefined){
			state = guid();
			path += (path == this.path ? "" : "&") + this.stateKey + "=" + state;
			if (this.stateValidator !== undefined)
				this.stateValidator(state);
		}
		
		that._oauthWindow = window.open(path, this.windowName);
		that._oauthInterval = window.setInterval(function(){
			if (that._oauthWindow.closed) {
				window.clearInterval(that._oauthInterval);
				this.callback();
			}
		}, 0);
	}
}