'use strict';

angular.module('questtrade')
.controller('NavbarController', function($scope, $mdSidenav) {
  $scope.toggle = function() {
    $mdSidenav('left').toggle();
  };
  $scope.close = function() {
    $mdSidenav('left').close();
  };
})