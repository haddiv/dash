
function loadDoc() {
    var formData = new FormData(document.forms.person);
    var xhttp = new XMLHttpRequest();
    //var url = 'server.js';
    xhttp.open("POST", "http://localhost:8080", true);
    //xhttp.send(employeesForm.html);
  //  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log(formData);
}
console.log(loadDoc);