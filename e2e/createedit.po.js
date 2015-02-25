/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var CreateEditPage = function() { 
  this.name = element(by.model('person.name'));
  this.phone = element(by.model('person.phone'));
  this.address = element(by.model('person.address'));
  this.submit = element(by.css('.submitbtn'));
};

module.exports = new CreateEditPage();
