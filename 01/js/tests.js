
mocha.setup('bdd');

// CHAI
var assert = chai.assert;
var expect = chai.expect;

describe("Today we have cake", function() {
  var date = moment().subtract(32, 'years');
  var test = daysUntil(date);
  it('Its a string', function() {
    expect(daysUntil(date)).to.be.a('string');
  });
  it('Returns Cake', function() {
    expect(daysUntil(date)).to.be.equal('cake');
  });
});

describe("In 66 Days", function() {
  var date = moment().subtract(26, 'years').add(66, 'days');
  it('No cake today', function() {
    expect(daysUntil(date)).not.be.equal('cake');
  });
  it('Its a number', function() {
    expect(daysUntil(date)).to.be.a('number');
  });
  it('Is a positive number', function() {
    expect(daysUntil(date)).to.be.greaterThan(0);
  });
  it('Number equals 66', function() {
    expect(daysUntil(date)).to.be.equal(66);
  });
});

describe("In 300+ Days", function() {
  var date = moment().subtract(26, 'years').subtract(30, 'days');
  var test = daysUntil(date);
  it('No cake today', function() {
    expect(daysUntil(date)).not.be.equal('cake');
  });
  it('Its a number', function() {
    expect(daysUntil(date)).to.be.a('number');
  });
  it('Is a positive number', function() {
    expect(daysUntil(date)).to.be.greaterThan(0);
  });
  it('Is greater than 300', function() {
    expect(daysUntil(date)).to.be.greaterThan(300);
  });
});

mocha.run();