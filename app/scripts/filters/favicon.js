'use strict';

/**
 * @ngdoc filter
 * @name sspmApp.filter:favicon
 * @function
 * @description
 * # favicon
 * Filter in the sspmApp.
 */
angular.module('sspmApp')
  .filter('favicon', function () {
    return function (input) {
      return 'http://'+input.split('/')[0]+'/favicon.ico';
    };
  });
