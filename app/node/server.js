var http = require('http');
var url = require('url');
//create a server object:
http.createServer(function (req, res) {
    console.log("ab")
    var q = url.parse(req.url, true);
    console.log(q.pathname);
    if(q.pathname=="/create"){
console.log("a")
    }
   // console.log(q)
}).listen(8080);