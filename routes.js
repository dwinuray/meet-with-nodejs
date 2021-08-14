var fs  = require('fs');
var url = require('url');


/**
 * 
 * @param {Name File} file 
 * @param {Response} res 
 */
function renderFile( file, res ){

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile( file, null, function( err, data ) {

        // check
        if ( err ) {

            res.writeHead(404);
            res.write("Whoops page not found");
        } else {

            res.write(data);
        }

        res.end();
    } );
}


// module
module.exports = {

    handleRequest : function( req, res ) {

        // get path of url
        var path = url.parse(req.url).pathname;

        // case
        switch (path) {
            case '/':
                
                renderFile('index.html', res);
                break;
        
            case '/users':
                renderFile('users.html', res);
                break;
        }

    }
}