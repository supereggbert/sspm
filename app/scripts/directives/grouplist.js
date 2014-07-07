'use strict';

/**
 * @ngdoc directive
 * @name sspmApp.directive:groupList
 * @description
 * # groupList
 */
angular.module('sspmApp')
  .directive('groupList', function () {
    return {
      templateUrl: 'views/grouplist.html',
      restrict: 'E'
    };
  });
