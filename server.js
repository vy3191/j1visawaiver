var express = require("express");
var app = express();
//ser port
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));
//set up routes

app.get("/", function(request,respond){
    respond.render("index"); 
});

app.listen(port, function(){
	console.log("app is running");
});