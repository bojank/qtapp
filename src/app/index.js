'use strict';

angular.module('questtrade', ['ngResource', 'ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/person/list.html',
        controller: 'PersonController'
      })
      .when('/person', {
        templateUrl: 'app/person/addedit.html',
        controller: 'PersonController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
