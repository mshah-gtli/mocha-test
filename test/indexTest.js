const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../index');

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', function(){
    before(function() {
        // runs before all tests in this block
      });
    
      after(function() {
        // runs after all tests in this block
      });
    
      beforeEach(function() {
        // runs before each test in this block
      });
    
      afterEach(function() {
        // runs after each test in this block
      });

  describe('sayHello()', function(){
    it('sayHello should return hello', function(){
      //let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function(){
      //let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function(){
    it('addNumbers should be above 5', function(){
      //let result = app.addNumbers(5,5);
      assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return type number', function(){
      //let result = app.addNumbers(5,5);
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});

// You can choose to retry failed tests up to a certain number of times. This feature is designed to handle end-to-end tests (functional tests/Selenium...) where resources cannot be easily mocked/stubbed. It's not recommended to use this feature for unit tests.


describe('retries', function() {
    // Retry all tests in this suite up to 4 times
    this.retries(4);
  
    beforeEach(function() {
      browser.get('http://www.yahoo.com');
    });
  
    it('should succeed on the 3rd try', function() {
      // Specify this test to only retry up to 2 times
      this.retries(2);
      expect($('.foo').isDisplayed()).to.eventually.be.true;
    });
  });
  
