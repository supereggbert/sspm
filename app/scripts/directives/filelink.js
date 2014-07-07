'use strict';

/**
 * @ngdoc directive
 * @name sspmApp.directive:fileLink
 * @description
 * # fileLink
 */
angular.module('sspmApp')
  .directive('fileLink', function () {
    return {
      template: '<span ng-transclude></span>',
      restrict: 'A',
			transclude: true,
			scope: {
				onFile:"="
			},
      link: function postLink(scope, element, attrs) {
				var input=$( '<input type="file" style="display:none">');
				element.click(function(e){
					input.trigger('click');
				});
				input.bind("change",function(e){
					var files = e.target.files;
					for (var i = 0, f; f = files[i]; i++) {
						var reader = new FileReader();
						reader.onload = function(e) {
							scope.onFile(e.target.result);
						};
						reader.readAsBinaryString(f);
					}
				});
			}
		};
  });
