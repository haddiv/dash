// get years from 1970 to 2017
function getYear (startYear) {
    var currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1970;
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }
    return years;
}
var YearArr = getYear();
console.log(YearArr);




angular.module('sbAdminApp')
    .controller('employeesFormCtrl', function($scope) {
        $scope.departments=["IT department", "logistics", "marketing", "customer service", "accounting department"];
        $scope.possitions=["Chief Executive Officer","analyst", "director of boards", "purchasing manager", "secretary", "economist"];
        $scope.days=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31];
        $scope.months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
        $scope.years = YearArr;
        $scope.clickToClone = function(sourceId, cloneId) {
            var sourceHtml = angular.element(document.getElementById(sourceId)).html();
            angular.element(document.getElementById(cloneId)).append(sourceHtml);
        }
    })
