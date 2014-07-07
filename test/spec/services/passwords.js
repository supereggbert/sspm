'use strict';

describe('Service: Passwords', function () {

  // load the service's module
  beforeEach(module('sspmApp'));

  // instantiate service
  var Passwords;
  beforeEach(inject(function (_Passwords_) {
    Passwords = _Passwords_;
  }));

  it('should do something', function () {
    expect(!!Passwords).toBe(true);
  });

});
