var http = require('http');
var url = require('url');
var fs = require('fs');



fs.readFile('./users.json', 'utf-8', function(err, data) {
    if (err) throw err;
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var q = url.parse(req.url, true).query;

        var arrayOfObjects = JSON.parse(data);

        arrayOfObjects.users.push(q);
        var txt = JSON.stringify(arrayOfObjects);
        console.log(txt);

        fs.appendFile('./users.json', txt , function (err) {
            if (err) throw err;
            console.log('Done!')
        });

        res.end();
    }).listen(8080);

})