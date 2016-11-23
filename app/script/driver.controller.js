/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var F1FeederApp = angular.module('F1FeederApp');
    F1FeederApp.controller('driverController', ['$scope','$routeParams', 'Driverservice', function ($scope, $routeParams, Driverservice) {
            $scope.id = $routeParams.id;
            $scope.races = [];
            $scope.driver = null;
            Driverservice.getDriverDetails($scope.id).success(function (response) {
                $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
            });
            Driverservice.getDriverRaces($scope.id).success(function (response) {
                $scope.races = response.MRData.RaceTable.Races;
            });
        }]);
})();

