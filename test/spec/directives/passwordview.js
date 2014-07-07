'use strict';

describe('Directive: passwordview', function () {

  // load the directive's module
  beforeEach(module('sspmApp'));
  beforeEach(module('views/passworditem.html'));

  var element,
    scope;

  beforeEach(inject(function ( $rootScope, $templateCache) {
    scope = $rootScope.$new();
    scope.password={site:'site',url:'url',username:'username',password:'password',dirty:true};
  }));

  it('Check get form if password dirty', inject(function ($compile) {
    element = angular.element('<passwordview></passwordview>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find(".passwordForm").length).toBe(1);
    expect(element.find(".passwordStatic").length).toBe(0);
  }));
  it('Check we get non form layout for none edited or dirty', inject(function ($compile) {
    scope.password.dirty=false;
    element = angular.element('<passwordview></passwordview>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find(".passwordStatic").length).toBe(1);
    expect(element.find(".passwordForm").length).toBe(0);
  }));
  it('Check we get form for edited password', inject(function ($compile) {
    scope.selectedPassword=scope.password;
    element = angular.element('<passwordview></passwordview>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find(".passwordForm").length).toBe(1);
    expect(element.find(".passwordStatic").length).toBe(0);
  }));
});
