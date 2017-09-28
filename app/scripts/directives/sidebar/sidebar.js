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
    };
  }]);



angular.module('sbAdminApp')
    .controller('ExampleController', ['$scope', function ($scope) {
        $scope.user={f_name:"",L_name:"",father_name:"", tel:"",email:"male",pos:"",Skills:"",Address:"",characteristics:"",Salary:"",answer:""};
        $scope.names = ["director", "menejer", "broker"];
        $scope.myFunc = function(user) {
            console.log(user);
        }}
        ]);