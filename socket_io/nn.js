var http = require('http');
var url = require('url');
var fs = require('fs');



fs.readFile('./users.json', 'utf-8', function(err, data) {
    if (err) throw err;
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
            var a = url.parse(req.url, true);
        var q = url.parse(req.url, true).query;
            // console.log(q);

        var arrayOfObjects = JSON.parse(data);

        arrayOfObjects.users.push(q);
        var txt = JSON.stringify(arrayOfObjects);
        console.log(txt);
       if(a.pathname=="/create") {
           fs.writeFile('./users.json', txt, function (err) {
               if (err) throw err;
              // console.log('Done!')
           });




       }  res.end();
    }).listen(8080);

})
//
//
//
//

//
//     var q = url.parse(req.url, true).query;
//
// // console.log(q);
//     fs.readFile('./users.json', 'utf-8', function(err, data) {
//          if (err) throw err;
//          console.log(data);
//     //
//          var arrayOfObjects = JSON.parse(data);
//         arrayOfObjects.users.push({
//             name:'poxos'
//         });
//     //
//         //console.log(ll);
//
//         fs.writeFile('./users.json', JSON.stringify( arrayOfObjects), 'utf-8', function(err) {
//             if (err) throw err;
//             console.log('Done!')
//         })
//      });
//     res.end();
//
// }).listen(8080);


