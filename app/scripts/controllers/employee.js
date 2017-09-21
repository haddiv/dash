'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('employeeController', function($scope) {
  
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
		
		 
});