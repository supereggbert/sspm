'use strict';

describe('Filter: favicon', function () {

  // load the filter's module
  beforeEach(module('sspmApp'));

  // initialize a new instance of the filter before each test
  var favicon;
  beforeEach(inject(function ($filter) {
    favicon = $filter('favicon');
  }));

  it('Should return the fav icon location from url"', function () {
    var text = 'www.test.com/test/test.html';
    expect(favicon(text)).toBe('http://www.test.com/favicon.ico');
    var text = 'www.test.com/test/test';
    expect(favicon(text)).toBe('http://www.test.com/favicon.ico');
    var text = 'www.test.com?';
    expect(favicon(text)).toBe('http://www.test.com/favicon.ico');
    var text = 'www.test.com/?test=test';
    expect(favicon(text)).toBe('http://www.test.com/favicon.ico');
  });

});
