'use strict'

var http = require('http');
var mappings = require('./Modules/mappingsCallback.js');

var server = http.createServer(function (request, response){
	mappings.getMapping(request.url,function (error,data){
		if(error){
			response.writeHead(404);
			return response.end();
		}

		response.writeHead(302,{location:data});
		response.end();
	})
});

server.listen(3002);