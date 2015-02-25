'use strict';

describe('list page', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/#/');
    page = require('./list.po');
  });

  it('should have three list items', function () {
    expect(page.listEls.count()).toBe(3);
  });

  it('filter by bojan, should have 1', function() {
    page.searchName.clear();
    page.searchName.sendKeys('Bojan');

    expect(page.listEls.count()).toBe(1);
  });

});
