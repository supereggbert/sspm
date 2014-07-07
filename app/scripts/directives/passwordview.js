'use strict';

/**
 * @ngdoc directive
 * @name sspmApp.directive:passwordview
 * @description
 * # passwordview
 */
angular.module('sspmApp')
  .directive('passwordview', function () {
    return {
      templateUrl: 'views/passworditem.html',
      restrict: 'E'
    };
  });
