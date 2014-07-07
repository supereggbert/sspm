'use strict';

/**
 * @ngdoc overview
 * @name sspmApp
 * @description
 * # sspmApp
 *
 * Main module of the application.
 */
var app=angular
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
]);


