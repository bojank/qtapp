/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var ListPage = function() { 
  this.listEls = element.all(by.repeater('person in people'));
  this.searchName = element(by.model('search.name'));
};

module.exports = new ListPage();
