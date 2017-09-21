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

// controller for select year
months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
days=[1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
angular.module('sbAdminApp')
    .controller('FormCtrl', function($scope) {
        $scope.years = YearArr;
    });