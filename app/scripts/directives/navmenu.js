'use strict';

/**
 * @ngdoc directive
 * @name sspmApp.directive:navMenu
 * @description
 * # navMenu
 */
angular.module('sspmApp')
  .directive('navMenu', ['Passwords',function (Passwords) {
    return {
      templateUrl: 'views/navmenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
	      scope.userDetails=Passwords.userDetails;
				scope.logout=Passwords.logout;
      }
    };
  }]);
