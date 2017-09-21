'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('employeeController', function($scope, $http) {
  
          $scope.save = function(){
		 			$scope.obj = [{
			name:$scope.name,
			surname:$scope.surname,
			gender:$scope.gender,
			dateOfBirth:$scope.dateOfBirth
			
			
			
			}]
			 $scope.intoJs = angular.toJson($scope.obj);
		 console.log($scope.intoJs);
			}
			
			$scope.fromJsonObj=[];
			
			$http({
        method : "GET",
        url : "data/employees.json"
    }).then(function mySuccess(response) {
        $scope.dataFromJson = response.data;
		$scope.fromJsonObj.push(angular.fromJson($scope.dataFromJson));
    }, function myError(response) {
        $scope.dataFromJson = response.statusText;
    });
			
		
		 
});

