'use strict';

describe('Filter: PasswordStrength', function () {

  // load the filter's module
  beforeEach(module('sspmApp'));

  // initialize a new instance of the filter before each test
  var PasswordStrength;
  beforeEach(inject(function ($filter) {
    PasswordStrength = $filter('PasswordStrength');
  }));

  it('should return the input prefixed with "PasswordStrength filter:"', function () {
    var text = 'angularjs';
    expect(PasswordStrength(text)).toBe('PasswordStrength filter: ' + text);
  });

});
