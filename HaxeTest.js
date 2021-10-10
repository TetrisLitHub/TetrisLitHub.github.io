(function ($global) { "use strict";
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var main_Main = function() { };
main_Main.main = function() {
	var button = window.document.createElement("button");
	button.textContent = "test";
	button.onclick = function(event) {
		window.alert("helo :)");
	};
	window.document.body.appendChild(button);
};
main_Main.main();
})({});
