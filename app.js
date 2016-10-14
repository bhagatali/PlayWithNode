'use strict'

var http = require('http');

http.get('http://localhost:3000',function(res){
	console.log("Got response: " + res.statusCode + ' --> ' + res);
}).on('error',function(e){
	console.log("Got error: " + e.message);
});

var server = http.createServer(function(request, response){
	var verb = request.method,
		url  = request.url

	response.writeHead(200,{
		'content-type':'text/html'
	});
	response.write('Hello Node! ' + verb + ' ' + url);
	response.end();
});

server.listen(3000);

