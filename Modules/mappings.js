'use strict';

var exports = module.exports = {};

exports.map = {
	g:'https://www.google.com',
	f:'https://www.facebook.com',
	e:'http://www.espncricinfo.com',
	i:'https://inbox.google.com/'	
};
console.log('****1****');
console.log(exports);
console.log('');

//This shows that exports and module.exports are one and the same
module.exports.sayHelloInEnglish = function(){
	return "Hello!";
};

console.log('****2****');
console.log(module.exports);
console.log('');

exports.sayHelloInHindi = function(){
	return "Namaste!";
};

console.log('****3****');
console.log(exports.sayHelloInHindi());
console.log('');

console.log('****4****');
console.log(exports);
console.log('');

exports.getMapping = function(url,callback){
	var alias = url.substring(1);

	if(!exports.map[alias]){
		return callback(new Error("URL not found"), undefined);
	}
	console.log("Mapped is: " + exports.map[alias]);
	return callback(null,exports.map[alias]);
}

console.log('****5****');
console.log(exports);
console.log('');