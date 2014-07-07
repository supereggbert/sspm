'use strict';

describe('Service: bootbox', function () {

  // load the service's module
  beforeEach(module('sspmApp'));

  // instantiate service
  var bootbox;
  beforeEach(inject(function (_bootbox_) {
    bootbox = _bootbox_;
  }));

  it('should do something', function () {
    expect(!!bootbox).toBe(true);
  });

});
