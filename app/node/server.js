var http = require('http');
var url = require('url');
var fs = require('fs');
//create a server object:
http.createServer(function (req, res) {
   console.log('datas')
   
     var q = url.parse(req.url, true);
    var datas = q.query;
	console.log(datas)
	//console.log(datas);
     if(q.pathname=="/create"){
	// console.log(req.url)
			 fs.readFile('../data/employees.json', 'utf8', function (err,data){
			   if(err){
			   //console.log(err)
			   }
			  else{
			  
			  var jsonArray= [];
				 if(data==""){
				 
					jsonArray.push(datas);
					var employee_json = JSON.stringify(jsonArray);
					fs.writeFile('../data/employees.json', employee_json);
					//console.log(employee_json)
					
						}
						else{
						var jsonArray= [];
						fs.readFile('../data/employees.json', 'utf8', function (err,data){
							
							var intoJsonObj = JSON.parse(data);
							//var str = 
							console.log(intoJsonObj);
							
						
							for(var i=0;i<intoJsonObj.length; i++){
									jsonArray.push(intoJsonObj[i])
									console.log(intoJsonObj[i])
									}
									
									
									jsonArray.push(datas);
									var employee_json = JSON.stringify(jsonArray);
									fs.writeFile('../data/employees.json', employee_json);
									//console.log(employee_json)
							
							/* employee_json = JSON.stringify(jsonArray);
							fs.appendFile('../data/employees.json', employee_json , function (err) {
							  if (err) throw err; */
							  
								
								//})
								})
							}
 }; 			   }) 
			
    }  
   // console.log(q)
}).listen(1337);

