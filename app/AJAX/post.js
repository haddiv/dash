<<<<<<< HEAD
var formData = new FormData(document.forms.person);
var formData = user;
var xhttp = new XMLHttpRequest();
var url = 'server.js';
xhttp.open("POST", "http://localhost:8080/create", true);
xhttp.send(employeesForm.html);
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
console.log(formData)
}
=======
var app = angular.module('app', []);
app.controller('LoginCtrl', function ($scope, $http) {
    $scope.user = {};
    $scope.user.customField = 'customValue';
    $scope.submitForm = function (form) {
        $http.post('/localhost:8080/', $scope.user)
            .success(function (data) {
                console.log('data:', data);
            })
            .error(function (data) {
                console.log('Error:', data);
            });
    };
});
>>>>>>> 2f86d189127870b2e712966f4cfd566b60bd1e4a
