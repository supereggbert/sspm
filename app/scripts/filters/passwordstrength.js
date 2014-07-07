'use strict';


/**
 * @ngdoc filter
 * @name sspmApp.filter:PasswordStrength
 * @function
 * @description
 * # PasswordStrength
 * Filter in the sspmApp.
 */
angular.module('sspmApp')
  .filter('PasswordStrength', function () {
    return function (input) {
			if(input.length<5){
				return 0;
			}
	    var result = owaspPasswordStrengthTest.test(input);
      return Math.round(result.passedTests.length/7*100);
    };
  });
