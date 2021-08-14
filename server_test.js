var http = require('http');
var fs   = require('fs');

/**
 * 
 * @param {Request} req 
 * @param {*Response} res 
 */
function handleRequest( req, res ) {

    res.writeHead( 200, {'Content-Type': 'text/html'} );

    fs.readFile('./index.html', null, function( err, data ) {

        if ( err ) {

            res.writeHead(404);
            res.write('Whoops ! File not found !');
        } else {

            res.write(data);
        }

        res.end();
    })


    // first output
    // res.end("Selamat datang di Node.js");
}


var server = http.createServer(handleRequest);
server.listen(3000, function() {

    console.log("Sedang berjalan pada port 3000");
})