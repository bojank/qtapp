'use strict';

describe('Create page', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/#/person/create');
    page = require('./createedit.po');
  });

  it('create new person', function () {
    page.name.sendKeys('Bojan');
    page.phone.sendKeys('1112223333');
    page.address.sendKeys('test');
    page.submit.click().then(function() {
        browser.waitForAngular();
        expect(element.all(by.repeater('person in people')).count()).toEqual(4);
      });;
  });

});

describe('Edit page', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/#/person/1');
    page = require('./createedit.po');
  });

 it('edit bojan to boki', function () {
    page.name.clear();
    page.name.sendKeys('Boki');
    page.submit.click().then(function() {
        browser.waitForAngular();
        var listEls = element.all(by.repeater('person in people'));
        var searchName = element(by.model('search.name'));
        searchName.clear();
        searchName.sendKeys('Boki');
        expect(listEls.count()).toBe(1);
      });;
  });

});
