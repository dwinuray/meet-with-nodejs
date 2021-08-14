var http = require('http');
var route = require('./routes');

http.createServer(route.handleRequest).listen(3000, function(){

    console.log("Oke Running...");
});

