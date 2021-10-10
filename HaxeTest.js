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
	console.log("main/Main.hx:4:","Hello from haxe");
};
main_Main.main();
})({});

// this was made in haxe and compiled to js and i want to see if it works
