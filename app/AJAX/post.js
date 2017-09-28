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