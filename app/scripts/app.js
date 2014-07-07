'use strict';

/**
 * @ngdoc overview
 * @name sspmApp
 * @description
 * # sspmApp
 *
 * Main module of the application.
 */
angular
  .module('sspmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/', {
        templateUrl: 'views/passwordlist.html',
        controller: 'PasswordsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config( [
    '$compileProvider',
    function( $compileProvider ){   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data):/);
    }
]);;
