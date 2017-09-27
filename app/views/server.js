var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
    if (req.url == "/create") {

        fs.readFile('../data/employees.json', 'utf8', function (err, data) {

            if (!err) {

                var jsonArray = [];
                if (data == "") {
                    jsonArray.push(data);
                    var employee_json = JSON.stringify(jsonArray);
                    fs.writeFile('../data/employees.json', employee_json);
                    console.log(employee_json)
                }
                else {
                    var jsonArray = [];
                    fs.readFile('../data/employees.json', 'utf8', function (err, data) {

                        var intoJsonObj = JSON.parse(data);

                        console.log(intoJsonObj);


                        for (var i = 0; i < intoJsonObj.length; i++) {
                            jsonArray.push(intoJsonObj[i])
                            console.log(intoJsonObj[i])
                        }
                        jsonArray.push(data);
                        var employee_json = JSON.stringify(jsonArray);
                        fs.writeFile('../data/employees.json', employee_json);

                    })
                }
            };
        })

    }
    // console.log(q)
}).listen(8080);
