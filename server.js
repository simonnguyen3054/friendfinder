var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require("path");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "matching_db"
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride('_method'));

app.get('/results', function(req, res){

  connection.query('select * from user_answers', function (error, results, fields) {
    if (error) throw error;
     res.json(results);
  });

});

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.post('/submit', function(req, res){
	var query = connection.query(
	  "INSERT INTO user_answers SET ?",
    req.body,
	  function(err, response) {
      if (err) {
        console.log(err);
      }
      // res.redirect('/survey');
	  }
  );
})

app.listen(3000, function(){
	console.log('listening on 3000');
});
