var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride('_method'));

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.listen(3000, function(){
	console.log('listening on 3000');
});
