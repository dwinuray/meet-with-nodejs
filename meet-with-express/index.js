var express = require('express')
var app = express();

app.get('/', function( req, res ) {

    res.send('Halo Semuanya');
})


app.get('/users/:id', function( req, res ) {
    
    res.send(req.params.id);
})

app.listen(3000, function(){

    console.log("Oke");
})