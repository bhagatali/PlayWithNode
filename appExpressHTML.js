'use strict';

var http = require('http'),
	path = require('path');
var express = require('express');
var mappings = require('./Modules/mappingsCallback.js');

var app = express();

app.use(express.static(path.join(__dirname,'Views')));

app.get('/:alias', function (req, res){
	mappings.getMapping(req.params.alias, function (error,data){
		if(error)
		{
			return res.sendStatus(404);
		}
		res.redirect(data);
	});
});

app.get('/',function (req,res){
	res.sendFile('index.html');
});

http.createServer(app).listen(3003);