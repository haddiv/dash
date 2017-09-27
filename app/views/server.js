var http = require('http');
var url = require('url');
var fs = require('fs');
//create a server object:
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log(q);
    //console.log("q" + q);
    //console.log(url);
    var datas = q.query;
    //console.log(datas)
    if (q.pathname == "/create") {
        // console.log(req.url)
        fs.readFile('../data/employees.json', 'utf8', function (err, data) {

            if (!err) {

                var jsonArray = [];
                if (data == "") {

                    jsonArray.push(datas);
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


                        jsonArray.push(datas);
                        var employee_json = JSON.stringify(jsonArray);
                        fs.writeFile('../data/employees.json', employee_json);

                    })
                }
            };
        })

    }
    // console.log(q)
}).listen(8080);
