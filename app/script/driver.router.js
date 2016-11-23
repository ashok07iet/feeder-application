/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    angular.module('F1FeederApp').
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "partial/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "partial/driver.html", controller: "driverController"}).
	otherwise({redirectTo: '/drivers'});
}]);
})();
