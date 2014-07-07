'use strict';

describe('Directive: navMenu', function () {

  // load the directive's module
  beforeEach(module('sspmApp'));
  beforeEach(module('views/navmenu.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.userDetails={validated:false}
  }));

  it('only show logout after we have a correct passphrase', inject(function ($compile) {
    element = angular.element('<nav-menu></nav-menu>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('a').length).toBe(1);
    scope.userDetails.validated=true;
    scope.$digest();
    expect(element.find('a').length).toBe(2);
  }));
});
