// Setting up the server

var express = require('express'), 
	app		= express();



//////////////////////////////////////////

app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/public/index.html');
});


var server = app.listen(3000, function() {
	console.log('Server started at http://localhost:3000');
});

/////////////////////////////////////////