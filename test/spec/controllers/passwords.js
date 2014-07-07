'use strict';

describe('Controller: PasswordsCtrl', function () {

  // load the controller's module
  beforeEach(module('sspmApp'));

  var PasswordsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PasswordsCtrl = $controller('PasswordsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
