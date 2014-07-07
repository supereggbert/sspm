'use strict';

describe('Directive: groupList', function () {

  // load the directive's module
  beforeEach(module('sspmApp'));
  beforeEach(module('views/passwordgroup.html'));
  beforeEach(module('views/grouplist.html'));
  beforeEach(module('views/passworditem.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.passwordGroups=[
      {name:'Group1', passwords: [{site:'password1',url:''},{site:'password2',url:''}]},
      {name:'Group2', passwords: [{site:'password1',url:''},{site:'password3',url:''}]}
    ];
  }));

  it('only new users should see new user message', inject(function ($compile) {
    scope.userDetails={newUser:true};
    element = angular.element('<group-list></group-list>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('.alert-success').length).toBe(1);
    scope.userDetails.newUser=false;
    scope.$digest();
    expect(element.find('.alert-success').length).toBe(0);
  }));

  it('group filter should exclude non matches', inject(function ($compile) {
    element = angular.element('<group-list></group-list>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('password-group').length).toBe(2);
    scope.filterGroup.name='Group1'
    scope.$digest();
    expect(element.find('password-group').length).toBe(1);
  }));

  it('search filter should filter groups', inject(function ($compile) {
    scope.filterPassword='Group1';
    element = angular.element('<group-list></group-list>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('password-group').length).toBe(1);
  }));

  it('search filter should filter passwords', inject(function ($compile) {
    scope.filterPassword='password1';
    element = angular.element('<group-list></group-list>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('password-group').length).toBe(2);
    expect(element.find('passwordview').length).toBe(2);
    scope.filterPassword='password3';
    scope.$digest();
    expect(element.find('password-group').length).toBe(1);
    expect(element.find('passwordview').length).toBe(1);
  }));
});
