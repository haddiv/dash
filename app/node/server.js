var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log(q.pathname);

    var n_data = q.query;

    if (q.pathname == "/create/") {
        console.log("done!");
        fs.exists('../data/employees.json', function (exists) {
            if (exists) {
                console.log("yes file exists");
                fs.readFile('../data/employees.json', 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(data);
                    var jsonArray = [];

                    jsonArray.push(n_data);
                    var employee_json = JSON.stringify(jsonArray);
                    //fs.writeFile('../data/employees.json', employee_json);
                    console.log(employee_json);

                    fs.appendFile('../data/employees.json', employee_json, function (err) {
                        if (err) throw err;
                        console.log('Updated!');
                    });

                });

            } else {
                console.log("file not exists");
            }
        });
    }
}).listen(8080);