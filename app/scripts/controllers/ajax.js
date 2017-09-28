

function save(){


    var form = document.getElementById("person");
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "localhost:1337", true);
    var formData = new FormData(form);
    xhttp.send(formData);



}


