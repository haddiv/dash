function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "../employees.json", false);
    xhttp.send(employeesForm.html);
    console.log(xhttp.responseText);
}