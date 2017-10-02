'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('employeeController', function($scope, $http){
   
  
            /* $scope.save = function(){
		 			$scope.obj = [{
			name:$scope.name,
			surname:$scope.surname,
			gender:$scope.gender,
			dateOfBirth:$scope.dateOfBirth
						
			}]
			 $scope.intoJs = angular.toJson($scope.obj);
		 console.log($scope.intoJs);
			}*/
			
		
			
			$scope.save = function () {
			$scope.obj = {
			name:$scope.name,
			surname:$scope.surname,
			gender:$scope.gender,
			dateOfBirth:$scope.dateOfBirth
						
			}
			console.log($scope.obj)
			 var config={
                timeout: 2000 // 600 миллисекунд
            };
			
			$http({
				  method: 'GET',
				  url: 'http://localhost:8080',
				  config:config,
				  headers: {
					   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
					}
					}).then(function successCallback(response) {
					console.log(response.data)
						 
					  }, function errorCallback(response) {
						   console.log(error)
  });
							
		
		//Get the data from the file
		
		$scope.fromJsonObj; 				
			$http({
        method : "GET",
        url : "data/employees.json"
    }).then(function mySuccess(response) {
	
        $scope.dataFromJson = response.data;
		$scope.fromJsonObj=angular.fromJson($scope.dataFromJson);
		console.log($scope.fromJsonObj);
    }, function myError(response) {
        $scope.dataFromJson = response.statusText;
    });
			
		
		 
}
});



 

