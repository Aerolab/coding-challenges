
mocha.setup('bdd');

// CHAI
var assert = chai.assert;
var expect = chai.expect;

describe("Bring Dribble Shots", function() {
  var returnedShots;
  it('To request for shots', function(done) {
    dribbleShots(function(shots) {
      returnedShots = shots
      expect(returnedShots).to.not.equal(null);
      done();
    })
  });
  it('To return array of shots', function(done) {
    expect(returnedShots).to.not.equal(null);
    expect(returnedShots).to.be.array;
    expect(returnedShots[0]).to.be.array;
    done();
  });
  it('To have valid shots', function(done) {
    expect(returnedShots[0]).to.be.an('object');
    expect(returnedShots[0]).to.have.property('title');
    expect(returnedShots[0]).to.have.property('link');
    done();
  });
  it('To have image source', function(done) {
    expect(returnedShots[0]).to.have.property('image');
    expect(returnedShots[0].image).to.be.an('string');
    done();
  });
  it('To not have images source array', function(done) {
    expect(returnedShots[0]).to.not.have.property('images');
    done();
  });
});

mocha.run();