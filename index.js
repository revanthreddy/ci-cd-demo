var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

// Setup Port to Use for Server Communication
server.listen(3000);
// Parses RESTful body content to determine XML/JSON/other formats
//app.use(express.bodyParser());

// Not sure. Research
//app.use(express.methodOverride());

// When displaying index.html, join path.  Basically, look for index.html under public_html/public.
app.use(express.static(path.join(__dirname + '/public')));

//app.use(app.router);


app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendfile(__dirname + '/public/index.html');
    //return res.send("DATA IS THE NEW BACON");
});
