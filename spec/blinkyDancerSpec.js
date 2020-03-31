// var merge = function(arr1, arr2, callback) {
//   let mergedArr = [];

//   for (let i = 0 ; i < arr1.length; i++) {
//     mergedArr.push(callback(arr1[i], arr2[i]);)
//   }

//   return mergedArr;
// };

// var euclid = function(coords1, coords2) {
//   let squaredDeltas = merge(coords1, coords2, function(a, b) {
//     return Math.abs((a - b) * (a - b));
//   });

//   let answer = Math.sqrt(squaredDeltas[0], squaredDeltas[1]);

//   return answer;
// }


describe('makeBlinkyDancer', function() {

  var makeBlinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    // changed to include new keyword and capitalized makeBlinkyDancer
    makeBlinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(makeBlinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(makeBlinkyDancer.$node, 'toggle');
    makeBlinkyDancer.step();
    expect(makeBlinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(makeBlinkyDancer, 'step');
      expect(makeBlinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(makeBlinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(makeBlinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});