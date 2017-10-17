
angular.module('formCtrl', []).controller('formController', function ($scope,Nerd,$window) {


        $scope.user = {};






$scope.del=function(id) {
          Nerd.delete(id);
    $window.location.reload()
};


});