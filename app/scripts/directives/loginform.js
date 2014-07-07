'use strict';

/**
 * @ngdoc directive
 * @name sspmApp.directive:loginForm
 * @description
 * # loginForm
 */
angular.module('sspmApp')
  .directive('loginForm', ['Passwords',function (Passwords) {
    return {
	    link:function(scope){
				scope.passphrase='';
				scope.login=function(){
					var validated=Passwords.validatePhasephrase(scope.passphrase);
					scope.$parent.validated=validated;
					if(!validated) scope.errored=true;
				}
			},
      templateUrl: 'views/login.html',
      restrict: 'E'
    };
  }]);
