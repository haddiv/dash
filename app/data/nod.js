var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
   
    var q = url.parse(req.url, true).query;
    console.log(is);
    console.log(q.pathname);
    if(q.pathname == "/create"){
        console.log("done!");
        fs.readFile('.employees.json', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            console.log(is);
            if(is==''){
                var employee = {name:'poxos',username:'test'};
                var all_data = [];
                all_data.push(employee);
                var employee_json= JSON.stringify(all_data);
                fs.writeFile('./employees.json', employee_json);
                console.log(employee_json);
            }
        });
    }

}).listen(8080);