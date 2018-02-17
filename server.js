var express = require('express')
var app = express()
var port = 8080;
app.get('/', function(req, res){
    res.send('HelloWorld!');
})

app.listen(port, function(){
    console.log("App is listetning at port: ", port);
});