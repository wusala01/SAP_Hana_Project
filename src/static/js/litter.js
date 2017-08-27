var app = angular.module('litter', [
	'ngDrag',
	'bibDB',
	'litterDirectives'
]).controller('litterCtrl', [
	'$scope',
	'$bibDB',
	function(
		$scope,
		$bibDB
	){
		$scope.conf = conf;
		$scope.DB = $bibDB;
		$scope.current = null;
		$scope.item = null;
		
		function setCurrent(value) {
			$scope.current = value;
			$scope.item = $scope.DB[value];
		}
		
		$scope.setCurrent = setCurrent;
		
		function dragListener(val, $event){
			$event.originalEvent.dataTransfer.setData("text", "\\autocite[][]{" + val + "}");
		};
		
		$scope.dragListener = dragListener;
		
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
					authorEditor = authorEditor [0];
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
	}]);


	
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