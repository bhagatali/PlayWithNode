'use strict';

var http = require('http'),
	path = require('path');
var express = require('express');
var mappings = require('./Modules/mappingsCallback.js');

var app = express();

app.set('views',path.join(__dirname,'Views'));
app.set('view engine','ejs');	

app.get('/:alias', function (req, res){
	mappings.getMapping(req.params.alias, function (error,data){
		if(req.params.alias=="h")
		{
			return res.send("Hello 2016!");
		}

		if(req.params.alias=="j")
		{
			return res.send({
				"name":"Ali",
				"zodiac":"Virgo"
			});
		}

		if(error)
		{
			return res.sendStatus(404);
		}

		res.redirect(data);
	});
});

app.get('/',function (req,res){
	res.render('index',{
		mappings: "Hello 2016! You are going to be great."
	});
});

http.createServer(app).listen(3003);