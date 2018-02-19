var express = require('express')
var app = express()
var path    = require("path");
var port = 5050;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(port, function(){
    console.log("App is listetning at port:", port);
});