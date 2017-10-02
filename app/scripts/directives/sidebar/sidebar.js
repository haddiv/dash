'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('sidebar',['$location',function() {
    return {
      templateUrl:'scripts/directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller:function($scope){
        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 0;
        $scope.multiCollapseVar = 0;
        
        $scope.check = function(x){
          
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
        
        $scope.multiCheck = function(y){
          
          if(y==$scope.multiCollapseVar)
            $scope.multiCollapseVar = 0;
          else
            $scope.multiCollapseVar = y;
        };
      }
    }
  }]);

angular.module('sbAdminApp')

.controller('ExampleController', ['$scope','$http', function ($scope, $http) {
    $scope.user={name:"",Last_name:"",poto:"", birthday:"",gender:"male",email:"",Address:"",phone:"",positions:"",date:"",skils:"",disgust:"",id:""};
    $scope.names = ["director", "menejer", "broker"];
    $scope.myFunc = function(user,$http) {
        console.log(user);

        //
        //    // var formData = new FormData(document.forms.person);
        // var formData =user;
        //     var xhttp = new XMLHttpRequest();
        //     //var url = 'server.js';
        //     xhttp.open("POST", "http://localhost:8080/create", true);
        //     //xhttp.send(employeesForm.html);
        //     //  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //     console.log(formData);
        // }

        $http.post("localhost:8080/create", user).then(function success (response) {
            $scope.response = response.data;
        })}
    }]);
