'use strict';

describe('Directive: passwordGroup', function () {

  // load the directive's module
  beforeEach(module('sspmApp'));
  beforeEach(module('views/passwordgroup.html'));
  beforeEach(module('views/passworditem.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.group={name:'Group1',passwords:[]};
  }));

  it('have input box when editing', inject(function ($compile) {
    element = angular.element('<password-group></password-group>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('.navbar-brand input').length).toBe(0);
    scope.selectedGroup=scope.group;
    scope.$digest();
    expect(element.find('input').length).toBe(1);
  }));
});
