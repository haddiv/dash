var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('Server is running');
    var q = url.parse(req.url, true);

    console.log(q.pathname);
    if(q.pathname == "/create"){
        console.log("done!");
        fs.readFile('./employees.json', 'utf8', function (err,data) {
            if (err) throw err
                 console.log(err);

            console.log(data);
            if(data==''){
                var employee = {name:'name',username:'test'};
                var all_data = [];
                all_data.push(employee);
                var employee_json= JSON.stringify(all_data);
                fs.writeFile('./employees.json', employees_json);
                console.log(employees_json);
            }
        });
    }

}).listen(8080);
