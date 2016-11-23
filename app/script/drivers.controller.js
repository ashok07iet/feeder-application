/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var F1FeederApp = angular.module('F1FeederApp');
F1FeederApp.controller('driversController', ['$scope', 'Driverservice', function ($scope, Driverservice) {
        $scope.driversList = [];
        Driverservice.getDrivers().success(function (response) {
            $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });
        $scope.searchFilter = function (driver) {
            var keyword = new RegExp($scope.nameFilter, 'i');
            return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
        };
    
}]);

