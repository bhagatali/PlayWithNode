'use strict'

var http = require('http');

var mappings = require('./Modules/mappings');

console.log(mappings.sayHelloInHindi());

var server = http.createServer(function(request, response){
	mappings.getMapping(request.url,function callback(error,data){
		if(error)
		{
			response.writeHead(404);
			return response.end();
		}

		response.writeHead(302,{location:data});
		response.end();
	});
});

server.listen(3001);