const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return num, fizz-buzz, buzz or fizz', function() {
    // range of normal inputs
    const normalCases = [
      {num: 30, expected: 'fizz-buzz'},
      {num: 10, expected: 'buzz'},
      {num: 6, expected: 'fizz'},
      {num: 26, expected: 26}
    ];
    // for each input (num), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should return number for multiples not of 3 or 5', function() {
    // range of normal inputs
    const normalCases = [1, 4, 2];
    // for each input (num), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });

  it('should return fizz-buzz for multiples of 15', function() {
    // range of normal inputs
    const normalCases = [30, 60, 75];
    // for each input (num), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should return buzz for multiples of 5', function() {
    // range of normal inputs
    const normalCases = [10, 20, 40];
    // for each input (num), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('should return fizz for multiples of 3', function() {
    // range of normal inputs
    const normalCases = [33, 66, 99];
    // for each input (num), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
        fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });
});