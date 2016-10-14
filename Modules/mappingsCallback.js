'use strict';

var exports = module.exports = {};

exports.map = {
	g:'https://www.google.com',
	f:'https://www.facebook.com',
	e:'http://www.espncricinfo.com',
	i:'https://inbox.google.com/'	
};

exports.getMapping = function(alias,callback){

	if(!exports.map[alias]){
		return callback(new Error("URL not found"),undefined);
	}

	return callback(null,exports.map[alias]);
};