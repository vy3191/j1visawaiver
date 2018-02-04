var path = require('path');
var express = require("express");
var app = express();
//ser port
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get( "*", function( req, res ) {
    res.sendFile( path.resolve( __dirname, "index.html" ) );
} );

app.listen(port, function(){
	console.log("app is running on port " + port);
});