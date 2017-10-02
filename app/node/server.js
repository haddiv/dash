var http = require('http');
var url = require('url');
var fs = require('fs');
//create a server object:
var server = http.createServer(function (req, res) {
console.log("server");
   
      var q = url.parse(req.url, true);
		var datas = q.query;

     if(q.pathname==="/create"){
	 console.log(q)
			 fs.readFile('../data/employees.json', 'utf8', function (err,data){
			   if(err){
			   //console.log(err)
			   }
			  else{
			  
			  var jsonArray= [];
				 if(data===""){
				 
					jsonArray.push(data);

					var employee_json = JSON.stringify(jsonArray);
					fs.writeFile('../data/employees.json', employee_json);
					//console.log(employee_json)
					
						}
						else{

						fs.readFile('../data/employees.json', 'utf8', function (err,data){
							
							var intoJsonObj = JSON.parse(data);

							console.log(intoJsonObj);
							
						
							for(var i=0;i<intoJsonObj.length; i++){
									jsonArray.push(intoJsonObj[i]);
									console.log(intoJsonObj[i]);
									}
									
									
									jsonArray.push(data);
									var employee_json = JSON.stringify(jsonArray);
									fs.writeFile('../data/employees.json', employee_json);
																  
								
								})
							}
							
							} 	
							})
							
							
							
							}
							}).listen(8080);

server.timeout = 20000;