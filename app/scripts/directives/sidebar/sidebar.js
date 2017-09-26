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
    .controller("ctrlHomework",function($scope){


      $scope.save = function(){
          if($scope.firstname == '' || $scope.lastname == '' || $scope.age == null || $scope.email == '' || $scope.adress == '' || $scope.telephone == null){
                $scope.master = [{}];
             }else{
                 $scope.master = [
                  {
                      firstname : $scope.firstname,
                      lastname: $scope.lastname,
                      age:$scope.age,
                      email:$scope.email,
                      adress:$scope.adress,
                      telephone:$scope.telephone
                  }
                 ];
             }      
          };
        $scope.save();

    })






























