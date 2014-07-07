'use strict';

describe('Directive: loginForm', function () {

  // load the directive's module
  beforeEach(module('sspmApp'));
  beforeEach(module('views/login.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('have we got a passphrase box', inject(function ($compile) {
    element = angular.element('<login-form></login-form>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('input').length).toBe(1);
  }));
});
