var app = angular.module('litter', [
	'ngDrag',
	'bibDB',
	'ngStorage',
	'litterDirectives',
	'angular-toArrayFilter'
]).controller('litterCtrl', [
	'$scope',
	'$bibDB',
	'$sessionStorage',
	function(
		$scope,
		$bibDB,
		$sessionStorage
	){
		$scope.conf = {};
		$scope.conf.groups = groups;
		$scope.conf.fields = fields;
		$scope.DB = $bibDB;
		$scope.current = (!!$sessionStorage.current ? $sessionStorage.current : undefined);
		
		$scope.setCurrent = function setCurrent(value) {
			$scope.current = value;
			$sessionStorage.current = value;
		}
		
		$scope.makeAvailable = function(type){
			var fields = $scope.DB[$scope.current].fields;
			if (!!fields[type]) return;
			else {
				var path = Object.findSubKey($scope.conf.groups, value);
				var conf = $scope.conf.groups;
				for (var key = path.shift(); !!key; key = path.shift())
					conf = conf[key];
				if (!!conf.multi) {
					var entry;
					switch (type) {
						case "name": 
						entry = {family: [{type: "text", text: ""}], given: [{type: "text", text: ""}]};
						break;
						case "text": 
							if (!!conf.direct) entry = "";
							else entry = {type: "text", text: ""};
							break;				
					}
					fields[type] = entry;
				} else {
					fields[type] = [];
					$scope.addItem(type);
				}
				
			}
		}
		
		$scope.showField = function showField(type) {
			if (!$scope.current) return false;
			else {
				var _conf = $scope.conf.fields[$scope.DB[$scope.current]["bib_type"]];
				if ((_conf.required.indexOf(type) > -1) || (_conf.eitheror.indexOf(type) > -1) || (_conf.optional.indexOf(type) > -1)){
					$scope.makeAvailable(type);
					return true;
				} else return false;
			}
		}
		
		$scope.addItem = function addItem(value) {
			var path = Object.findSubKey($scope.conf.groups, value);
			var conf = $scope.conf.groups;
			for (var key = path.shift(); !!key; key = path.shift())
				conf = conf[key];
			var type = conf.type;
			var entry;
			switch (type) {
				case "name": entry = {family: [{type: "text", text: ""}], given: [{type: "text", text: ""}]};
				break;
				case "text": 
					if (!!conf.direct) entry = "";
					else entry = {type: "text", text: ""};
					break;				
			}
			$scope.DB[$scope.current].fields[value].push(entry);
		}
		
		$scope.removeItem = function removeItem(value, key) {
			console.log(value, key);
			$scope.DB[$scope.current].fields[value].splice(key, 1);
		}
		
		$scope.dragListener = function dragListener(val, $event){
			$event.originalEvent.dataTransfer.setData("text", "\\autocite[][]{" + val + "}");
		};
		
		$scope.printAuthorTitle = function(bibEntry){
			var authorEditor;
			
			if (bibEntry.fields.author) {
				authorEditor = bibEntry.fields.author;
			} else if (bibEntry.fields.editor) {
				authorEditor = bibEntry.fields.editor;
			} 
			
			if (authorEditor === undefined) {
				authorEditor = "N/A";
			} else {
				var etal = false;
				if (authorEditor instanceof Array) {
					if (authorEditor.length > 1) etal = true;
					authorEditor = authorEditor[0];
				} 
				
				if (typeof authorEditor == "object") {
					authorEditor = authorEditor.family[0].text + ", " + authorEditor.given[0].text;
				}
				
				if (etal) authorEditor += " et.al.";
			}
			
			var date = bibEntry.fields.date;
			if (date.indexOf("/") !== -1)
				date =  date.split("/")[0];
			
			date = new Date(date);
			
			var title = bibEntry.fields.title || "N/A";
			
			if (title instanceof Array) title = title[0];
			
			if (typeof title == "object")  title = title.text;
			
			return authorEditor + " (" + date.getFullYear() + ") - " + title;
		};
		
		$scope.printCitation = function(bibEntry){
			return "dummy";
		};
		
		$scope.isActive = function(bibEntry){
			if (bibEntry.entry_key == $scope.current) return "active";
			else return "";
		};
		
		$scope.isEntry = function(value, index, array){
			return (index[0] != "$");
		};
	}]);

Object.recKeys = function(obj) {
	var keys = [],
		_keys = Object.keys(obj);
	for (let index in _keys) {
		let entry = [_keys[index]];
		keys.push(entry);
		if (typeof obj[_keys[index]] == 'object'){
			let subKeys = Object.recKeys(obj[_keys[index]]);
			for (let subindex in subKeys){
				let subEntry = entry.slice();
				subEntry = subEntry.concat(subKeys[subindex]);
				keys.push(subEntry);
			}
		}
	}
	return keys;
};

Object.findSubKey = function(obj, key) {
	var keys = Object.recKeys(obj);
	for (index in keys) {
		if (keys[index].indexOf(key) > -1) return keys[index];
	}
	return false;
}
	
$(document).ready(function() {
    $(".dropdown-menu").on('click', 'li a', function(){
      $(this).parents(".dropdown-menu").prev().html($(this).html() + ' <span class="caret"/>');
      $(this).parents(".dropdown-menu").prev().val($(this).text());
      $(this).parents(".input-group-btn").next().attr('data-type', $(this).text()).data('type', $(this).text());
   });
      
   $("form").on('keyup', '[data-type=ISBN]', function (e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
		var $this = $(this);
		var input = $this.val().split(/\D/).join('');
		var reg = /(?:(?=\d{11,13}$)(\d{0,3})|(?=\d{1,10}$))(\d?)(\d{0,5})(\d{0,3})(\d?)/;
		var maxParts = 5;
		var arr = reg.exec(input);
		if (arr === null || arr === undefined) return '';
		var res = [];
		for (var i = 1; i < arr.length && res.length <= maxParts; i++ ) {
			if (arr[i] == "") break;
			else if (arr[i] !== undefined) res.push(arr[i]);
		}
		$this.val(function() {
			return res.join("-").toUpperCase();
		});
	});
});