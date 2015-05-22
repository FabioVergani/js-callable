var callable=(function(o){var b=o.bind;return b.call(b,o.call);})(Function.prototype);
var hasOwn= callable(Object.prototype.hasOwnProperty);
console.log(hasOwn({xx:123},'xx'));

old:
/*
var shortCall=function(x){return Function.prototype.call.bind(x);};
var hasOwn=shortCall(Object.prototype.hasOwnProperty);
console.log(hasOwn({xx:123},'xx'));
*/

var callable = Function.prototype.bind.bind(Function.prototype.call);
var hasOwn= callable(Object.prototype.hasOwnProperty);
console.log(hasOwn({xx:123},'xx'));


var callable = .bind.bind(Function.prototype.call);
var hasOwn= callable(Object.prototype.hasOwnProperty);
console.log(hasOwn({xx:123},'xx'));




var callable=(function(o){
	var b=o.bind,c=o.call;
	return b.call(b,c);
})(Function.prototype);
var hasOwn= callable(Object.prototype.hasOwnProperty);
console.log(hasOwn({xx:123},'xx'));


