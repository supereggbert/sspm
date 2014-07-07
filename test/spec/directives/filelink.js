'use strict';

describe('Directive: fileLink', function () {

  // load the directive's module
  beforeEach(module('sspmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Translcude test', inject(function ($compile) {
    element = angular.element('<file-link>test</file-link>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('test');
  }));
});
