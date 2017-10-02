var formData = new FormData(document.forms.person);
var formData = user;
var xhttp = new XMLHttpRequest();
var url = 'server.js';
xhttp.open("POST", "http://localhost:8080/create", true);
xhttp.send(employeesForm.html);
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
console.log(formData)
}
