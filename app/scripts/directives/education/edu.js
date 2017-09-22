angular.module('sbAdminApp')
    .directive('education',function(){
        return {
            templateUrl:'scripts/directives/education/edu.html',
            restrict: 'E',
            replace: true,
        }
    });