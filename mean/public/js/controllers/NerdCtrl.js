angular.module('NerdCtrl', []).controller('NerdController', function($scope, Nerd) {
    angular.element(document).ready(function () {
       // console.log(Nerd.get());

        Nerd.get().then(function(value) {
            var names;
           // console.log(value.data[0]);
           // var val = value.data;
             $scope.names = value.data;
        });


    });
    $scope.edit= function(id) {

        Nerd.upd(id).then(function(value){

            var nerds;
            $scope.nerds=value.data;
$scope.user=$scope.nerds;
        });

    };

    $scope.myFunc = function (user,id) {
        console.log(user);
        console.log(id);
        if(id!==undefined) {

            Nerd.update(user,id);
        }
        else{
            Nerd.create(user);
        }

        // create a bear (accessed at POST http://localhost:8080/api/bears)
    };

        // create a bear (accessed at POST http://localhost:8080/api/bears)





});