'use strict';

/**
 * @ngdoc directive
 * @name sspmApp.directive:PasswordGroup
 * @description
 * # PasswordGroup
 */
angular.module('sspmApp')
  .directive('passwordGroup', function () {
    return {
      templateUrl: 'views/passwordgroup.html',
      restrict: 'E',
      link: function postLink(scope, element) {
				scope.$watch('selectedGroup',function(){
					if(scope.group===scope.selectedGroup){
						element.find('input[ng-model="group.name"]').focus();
					}
				});
      }
    };
  });
