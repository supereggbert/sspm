'use strict';

describe('Filter: PasswordStrength', function () {

  // load the filter's module
  beforeEach(module('sspmApp'));

  // initialize a new instance of the filter before each test
  var PasswordStrength;
  beforeEach(inject(function ($filter) {
    PasswordStrength = $filter('PasswordStrength');
  }));

  it('Password strength test"', function () {
   var password='testpassword123';
   expect(PasswordStrength(password)).toBe(71);
  });

});
