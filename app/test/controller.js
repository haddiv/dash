$scope.submit_form = function()
{
    $http({
        url: "http://localhost/services/test.php",
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: $.param($scope.formAdata)
    }).success(function(data, status, headers, config) {
        $scope.status = status;
    }).error(function(data, status, headers, config) {
        $scope.status = status;
    });
}