// http

var http=require('http');
//create server
http.createServer(function (req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    res.end("Asti");
}).listen(1333);