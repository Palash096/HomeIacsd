const express = require('express');
var app = express();

var path = require('path');

// server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
console.log("Server is running on port No 8080");

