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
        $scope.loadDoc=function () {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("demo").innerHTML =
                        this.responseText;
                }
            };
            xhttp.open("GET", "../data/employees.json", true);

            var xml =  xhttp.send();
            console.log(xml);
            return xml;
        }
        },







