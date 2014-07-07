'use strict';

describe('Directive: PasswordGroup', function () {

  // load the directive's module
  beforeEach(module('sspmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-password-group></-password-group>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the PasswordGroup directive');
  }));
});
