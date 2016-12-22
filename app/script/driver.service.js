/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    angular.module('F1FeederApp').
            factory('Driverservice', function ($http) {

                var driverAPI = {};

                driverAPI.getDrivers = function () {
                    return $http({
                        method: 'Get',
                        url: 'http://ergast.com/api/f1/2013/driverStandings.json',
                        headers:{'remote-user':'ashok'}
                    });
                };
                driverAPI.getDriverDetails = function (id) {
                    return $http({
                        method: 'Get',
                        url: 'http://ergast.com/api/f1/2013/drivers/' + id + '/driverStandings.json'
                    });
                };
                driverAPI.getDriverRaces = function (id) {
                    return $http({
                        method: 'Get',
                        url: 'http://ergast.com/api/f1/2013/drivers/' + id + '/results.json'
                    });
                };
                return driverAPI;
            });
})();